import { getAuth, signOut } from "firebase/auth";
import { clearUser } from "../redux/userSlice";
import Swal from 'sweetalert2';

export const handleLogout = ( dispatch ) => {
    Swal.fire({
        title: "Estas cerrando sesion!",
        text: "¿Deseas continuar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, cerrar sesión",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            // Cerrar sesión con Firebase
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                    dispatch(clearUser()); // Limpiar estado global
                    Swal.fire("¡Sesión cerrada!", "Ha cerrado sesión correctamente.", "success");
                })
                .catch((error) => {
                    Swal.fire("Error", "No se pudo cerrar la sesión.", "error");
                    console.error("Error logging out:", error);
                });
        }
    });
};
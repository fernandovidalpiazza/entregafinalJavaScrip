const contacto = document.querySelector("#contacto")
contacto.addEventListener("click",()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'usted agrego un contacto correctamente',
        showConfirmButton: false,
        timer: 1500
    })
})


        let personas = [];
        // Se crea una lista de personas 
        const addPersona = (ev)=>{
            ev.preventDefault();  //Para prevenir el submitting
            let persona = {
                
                nombre: document.getElementById('name').value,
                apellido: document.getElementById('apell').value,
                usuario: document.getElementById('uname').value,
                correo: document.getElementById('mail').value,
                pass: document.getElementById('psw').value
            }
            personas.push(persona);
           /* document.forms[0].reset(); */ // Para limpiar la información en las próximas entradas

            //Para mostrar los datos ingresados
            console.warn('added' , {personas} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(personas, '\t', 2);

            //Salvar la data en el Almacenamiento Local
            localStorage.setItem('ListaDePersonas', JSON.stringify(personas) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addPersona);
        });
  
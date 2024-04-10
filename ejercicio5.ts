const usuarios=[
                {
                    name: "Rafael perez",
                    email: "rafael@gmail.com"
                },
                {
                    name: "Rosario Perez",
                    email: "rosario@gmail.com"
                },
                {
                    name: "Rodrigo avila",
                    email: "rodrigo@gmail.com"
                },
                {
                    name: "Alberto Campos",
                    email: "alberto@gmail.com"
                },
            ]

const usuarioRosario = usuarios.find(usuario => usuario.email === "rosario@gmail.com");

console.log(usuarioRosario);

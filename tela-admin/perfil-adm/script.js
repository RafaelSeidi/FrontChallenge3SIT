
var idAdmin = sessionStorage.getItem("id")

console.log(idAdmin);

function removerAdmin(adminId) {

    if (confirm(`Você realmente deseja remover sua conta?`)) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(adminId);

        const requestOptions = {
            headers: myHeaders,
            body: raw,
            method: "DELETE",
            redirect: "follow"
        };

        fetch("http://localhost:8094/administrador/remover", requestOptions)
            .then((response) => response.json())
            .then((json) => {
                if (json.length !== 0) {
                    console.log(json);
                    location.href = '../../tela-delete/index.html';
                }
            })
            .catch((error) => console.error(error));
    }
}

function deletar() {
    removerAdmin(idAdmin);
}

function alteraEmail(){
    alert('Email alterado com sucesso!');
    location.href = '../perfil-funcionario/index.html';
}

function alteraTel(){
    alert('Telefone alterado com sucesso!');
    location.href = '../perfil-funcionario/index.html';
}

function alteraSenha(){
    alert('Senha alterado com sucesso!');
    location.href = '../perfil-funcionario/index.html';
}
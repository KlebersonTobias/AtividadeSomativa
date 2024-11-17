function mascaraTelefone(event) {
    let tecla = event.key;
    // Regex:
    // g = não termina verificação enquanto não houver combinação para todos os elementos
    // \D+ = troca qualquer caractere que não seja um dígito por caracter vazio
    let telefone = event.target.value.replace(/\D+/g, "");
    // Regex: i = case insensitive
    // Se Tecla é número, concatena com telefone
    if(/^[0-9]$/i.test(tecla)) {
        let tamanho = telefone.length;
        if(tamanho >= 11) { // Se telefone com 12 ou mais caracteres, não faz mais nada
            return false;
        }
        if(tamanho > 10) {
            telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if(tamanho > 5) {
            telefone = telefone.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
        } else if(tamanho > 2) {
            telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
            telefone = telefone.replace(/^(\d*)/, "($1");
        }
        event.target.value = telefone;
        return
    }
    if(!["Backspace", "Delete", "Tab"].includes(tecla)) {
        return false;
    }
  }
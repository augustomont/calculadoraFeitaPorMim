let result = ''
function inserir(num){
    result += num
    document.querySelector('input#resultado').value = result
}
function limpar(){
    result = ''
    document.querySelector('input#resultado').value = result
}
function apagar(){
    result = result.slice(0, -1)
    document.querySelector('input#resultado').value = result
}
function calcular(){
    try{
        result = eval(result)
        document.querySelector('input#resultado').value = result
    } catch{
        window.alert('Operação inválida')
        limpar()
    }
}
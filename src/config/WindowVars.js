import * as bootstrap from 'bootstrap'

export default  function (){
    try{

        window.bootstrap = bootstrap


    }catch (error){
        console.error(error)
    }
}
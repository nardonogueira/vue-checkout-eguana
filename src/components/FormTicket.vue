<template>
    <section id="formContent">
        <div id="formBox">
            <p>
                <label for="inpMail">Email</label>
                <input type="text" class="frmControl" id="inpMail" placeholder="Informe seu email" />
            </p>
            <p>
                <label for="inpName">Name</label>
                <input type="text" class="frmControl" id="inpName" placeholder="Informe seu nome" />
            </p>
            <p>
                <label for="inpCpfCnpj">CPF/CNPJ</label>
                <input type="text" class="frmControl" id="inpCpfCnpj" placeholder="" />
            </p>

            <p>
                <input type="submit" class="submitButton" value="Pay" />
            </p>
        </div>
    </section>
</template>


<script>
    export default {}
</script>

<style scoped>
#formContent {
    padding:1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top:0;
    right: 0;
    /* width: 100%; */
    max-width: 500px;
    height: 100vh;
    background-color: #FFF;
  }

  #formBox {width: 90%;}
  #formBox p {padding-bottom: .5em;}

  label {font-size:.9em; opacity: .6;}
  .frmControl {
    padding:.6em .8em; 
    margin:.3em 0;
    width: 100%; 
    border: 1px solid #CCC; 
    border-radius: 4px; 
    font-size:1em; 
    font-weight: 700;
    box-shadow: var(--color-black-opacity) 0px 1px 4px;
    transition: .2s;
  }
  .frmControl:focus, .frmControl:active {
    outline-style: inset;
    outline-width: .3em;
    outline-color: rgba(0, 0, 0, .05);
    border-color: #999;
  }

  .frmControl::placeholder {
    font-weight: normal;
    }

  .submitButton {
    background-color: #00cc66; 
    padding:1em; 
    margin-top:.5em;
    width: 100%; 
    border: 1px solid #00cc66; 
    border-radius: 4px; 
    transition: .2s;
    cursor: pointer;
    font-weight: 700;
    font-size: 1em;
  }
  .submitButton:hover {}
  .submitButton:active {
    outline-style: inset;
    outline-width: .3em;
    outline-color: rgba(0, 0, 0, .05);
    background-color: #0dfd8d;
  }



  @media (max-width: 1024px) {
    #formContent {
        padding: 2em;
        margin:0 auto;
        height: auto;
        align-items: center;
    }

    #formBox {
    }
  }

</style>
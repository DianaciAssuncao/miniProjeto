document.getElementById("frmList").onsubmit = function () {
      let frmList = document.getElementById('frmList').elements;
      document.getElementById("resultado").innerHTML = "Você selecionou a linguagem: " + frmList['listLinguagens'].value;
      return false;
    }; 
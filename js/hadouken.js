const data_register = [
    { nome: "Guto",
     idade :"27",
      nacionalidade:"Brasil", 
      estado: "Sergipe",
       cidade: "Aracaju",
       formacao:  "ioasysCamp"}
       ];
     
     let flag = 0; 
     let verify_data = data_register.map((item) => {  
       const data = [item.nome,item.idade,item.nacionalidade, item.estado,item.cidade,item.formacao];
        for (let i =0 ; i < data.length ; i++)
        {
            if(data[i] == "")
            {
                flag = 1;
                console.log("Não cadastrado, por favor preenhca todos os campos");
                break;
            }
            
        }
        if(flag == 0)
        {
            console.log("Cadastrado");
        }
      })
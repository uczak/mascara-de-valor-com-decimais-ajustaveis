
     function formatarValorMoeda(precisao) 
     {

        var valor = $('[name=moeda]').val();//pega o conteudo do campo da tela.
        valor = valor.replace(/[^0-9]/g, '');//remove tudo que nao e numero.
        valor = valor.replace(/^0+/, '');
        valor = valor.toString();//converte para string.

        var nFormatado = '';//numero formatado.
        var centavos = valor.substring(valor.length - precisao);//pega os centavos do valor.
        valor = valor.substring(0 , valor.length - precisao);//pega a parte inteira ado valor.
        if(valor =='')
        {
            valor = '0';
        }
        if(centavos =='')
        {
            centavos = centavos.padStart(precisao, '0');
        }
        if (valor.length > 3)//se o campo possui mais de algarismos do que foi estipulado como precisao. 
        {
            for (var i = valor.length; i > 0; i = i - 3) 
            {
                /*
                vai concatenando com '.' de tres em tres para 
                    fazer a formatasao do numero. por isso que foi
                    concatenado um 0 apos o valor.os centavos tambem
                    estam com tres algarismos. 
                */
                nFormatado += '.' + valor.substring(i - 3, i);
            }
            /*
                pega o numero e separa em por pontos com o split() a partir da 
                primeira posisao(slice(1)) pega de tras para frente comcatenando
                com um '.' .
            */
            nFormatado = nFormatado.split('.').slice(1).reverse().join('.');
        }
        else
        {
            nFormatado = valor;
        }
        nFormatado += ',' + centavos;
        $('[name=moeda]').val('');//limpa o campo da tela.
        $('[name=moeda]').val(nFormatado);//incere novo valor formatado no campo.
    }
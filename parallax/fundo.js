function Fundo(context, imagem) {
   this.context = context;
   this.imagem = imagem;
   this.velocidade = 0;
   this.posicaoEmenda = 0;
}
Fundo.prototype = {
   atualizar: function() {
      // Atualizar a posição de emenda
      this.posicaoEmenda += this.velocidade;
      
      // Emenda passou da posição
      if (this.posicaoEmenda >= this.imagem.width)
         this.posicaoEmenda = 0;
   },
   desenhar: function() {
      var img = this.imagem;  // Para facilitar a escrita :D
      
      // Primeira cópia
      var posicaoX = this.posicaoEmenda - img.height;
      this.context.drawImage(img, posicaoX, 0, img.width, img.height);
      
      // Segunda cópia
      posicaoX = this.posicaoEmenda;
      this.context.drawImage(img, posicaoX, 0, img.width, img.height);     
   }
}


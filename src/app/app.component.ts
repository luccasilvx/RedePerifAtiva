import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PerifAtiva';

  form = {
    nome: '',
    whatsapp: '',
    email: '',
    area: 'Educação e Formação'
  };

  enviarWhatsapp() {
    const telefoneDestino = '5585996409567';

    const mensagem = `Olá! Me chamo ${this.form.nome}.\n\nGostaria de ser voluntário na Rede PerifAtiva.\n\nMinha área de interesse: ${this.form.area}.\nMeu contato: ${this.form.whatsapp}\nEmail: ${this.form.email}`;

    const link = `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, '_blank');
  }
}

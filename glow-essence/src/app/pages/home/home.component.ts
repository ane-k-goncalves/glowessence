import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardCategoriasComponent } from '../../components/card-categorias/card-categorias.component';
import { CardProdutosComponent } from '../../components/card-produtos/card-produtos.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, CardCategoriasComponent, CardProdutosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

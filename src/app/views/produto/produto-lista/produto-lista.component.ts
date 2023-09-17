import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { ProdutoService } from 'src/app/shared/service/produto.service';
import { ResponseProduto } from 'src/app/shared/model/responseProduto.model';



@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatTableModule],
})
export class ProdutoListaComponent {

  produtos: ResponseProduto[] = [];
  novoProduto: ResponseProduto = new ResponseProduto;

  constructor(private _snackBar: MatSnackBar, private produtoService: ProdutoService) {}
  
  buscaProdutos(codigo: string,descricao: string,custo: string,precoVenda: string) {
    this.produtoService.listarProdutos().subscribe(
      (data) => {
        this.produtos = data;
      },
      (error) => {
        this._snackBar.open(error,"Error");
        console.error('Erro ao carregar a lista de produtos:', error);
      }
    );
  }

  salvarNovoProduto() {
    this.produtoService.criarProduto(this.novoProduto).subscribe(
      (produtoSalvo) => {
        console.log('Produto salvo com sucesso:', produtoSalvo);
      },
      (error) => {
        console.error('Erro ao salvar o produto:', error);
      }
    );
  }
  
  displayedColumns: string[] = ['Codigo', 'Descricao', 'Custo'];
}



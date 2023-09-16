


import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';


export interface ProdutoElement {
    position: number;
    codigo: string;
    descricao: string;
    custo: number;
  }

const ELEMENT_DATA: ProdutoElement[] = [
    {position: 1, codigo: 'Hydrogen', custo: 1.0079, descricao: 'H'},
    {position: 2, codigo: 'Helium', custo: 4.0026, descricao: 'He'},
    {position: 3, codigo: 'Lithium', custo: 6.941, descricao: 'Li'},
    {position: 4, codigo: 'Beryllium', custo: 9.0122, descricao: 'Be'},
    {position: 5, codigo: 'Boron', custo: 10.811, descricao: 'B'},
    {position: 6, codigo: 'Carbon', custo: 12.0107, descricao: 'C'},
    {position: 7, codigo: 'Nitrogen', custo: 14.0067, descricao: 'N'},
    {position: 8, codigo: 'Oxygen', custo: 15.9994, descricao: 'O'},
    {position: 9, codigo: 'Fluorine', custo: 18.9984, descricao: 'F'},
    {position: 10, codigo: 'Neon', custo: 20.1797, descricao: 'Ne'},
  ];
  

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatTableModule],
})
export class ProdutoListaComponent {

  constructor(private _snackBar: MatSnackBar) {}

  
   buscaProdutos(codigo: string,descricao: string,custo: string,precoVenda: string) {


    //buscaDoBanco = service.getfrombackend(codigo, descricao)
    // dataSource = buscaDoBanco;

    this._snackBar.open(codigo,descricao);
  }
  
  displayedColumns: string[] = ['Codigo', 'Descricao', 'Custo'];
  dataSource = ELEMENT_DATA;
  }



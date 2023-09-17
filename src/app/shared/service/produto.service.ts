import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseProduto } from '../model/responseProduto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl = 'http://localhost:8080/produto'
  

  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<ResponseProduto[]> {
    return this.http.get<ResponseProduto[]>(this.apiUrl);
  }


  criarProduto(produto : ResponseProduto): Observable<ResponseProduto> {
    return this.http.post<ResponseProduto>(this.apiUrl, produto);
  }
}

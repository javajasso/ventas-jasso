import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Usuario } from '../../../../shared/models/usuarios.interface';
import { Rol } from '../../../../shared/models/roles.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient  ) { }
  
  listarUsuarios(): Observable <Usuario[]> {
    return this.http.get<Usuario []>(`${environment.API_URL}/usuarios`, {headers: {"requireToken": "true"}}).pipe(catchError((error) => this.handleError(error)));
  }

  listarRoles(): Observable <Rol[]> {
    return this.http.get<Rol []>(`${environment.API_URL}/roles/roles`, {headers: {"requireToken": "true"}}).pipe(catchError((error) => this.handleError(error)));
  }

  insertarUsuario(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.API_URL}/usuarios`, user, {headers: {"requireToken": "true"}}).pipe(catchError((error) => this.handleError(error)));
  }

  actualizarUsuario(user: Usuario): Observable <Usuario> {
    return this.http.put<Usuario>(`${environment.API_URL}/usuarios`, user, {headers: {"requireToken": "true"}}).pipe(catchError((error) => this.handleError(error)));
}

  eliminarUsuario(cveUsuario: number): Observable <Usuario> {
    return this.http.delete<Usuario>(`${environment.API_URL}/usuarios/${cveUsuario}`, {headers: {"requireToken": "true"}}).pipe(catchError((error) => this.handleError(error)));
}


private handleError(error: HttpErrorResponse) {
  // Puedes revisar el error aquí, o simplemente retornar un mensaje genérico
  console.error('Ocurrió un error:', error.message);
  return throwError('Algo salió mal; por favor, intenta de nuevo más tarde.');
}


}



import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class TokenStorage {

  /**
   * Get access token
   * @returns {Observable<string>}
   */
  public getAccessToken(): Observable<string> {
    const token: string = <string>localStorage.getItem('accessToken');
    return Observable.of(token);
  }

  /**
   * Get refresh token
   * @returns {Observable<string>}
   */
  public getRefreshToken(): Observable<string> {
    const token: string = <string>localStorage.getItem('refreshToken');
    return Observable.of(token);
  }
  /**
   * Get user info
   * @returns {Observable<any>}
   */
  public getUserInfo(): Observable<any> {
    const user_info: any = localStorage.getItem('userInfo');
    return Observable.of( JSON.parse( user_info ) );
  }
  /**
   * Set access token
   * @returns {TokenStorage}
   */
  public setAccessToken(token: string): TokenStorage {
    localStorage.setItem('accessToken', token);

    return this;
  }

   /**
   * Set refresh token
   * @returns {TokenStorage}
   */
  public setRefreshToken(token: string): TokenStorage {
    localStorage.setItem('refreshToken', token);

    return this;
  }
  /**
   * Set access user info
   * @returns {TokenStorage}
   */
  public setAccessUserInfo( userinfo: any ): TokenStorage {
    localStorage.setItem('userInfo', JSON.stringify( userinfo ) );

    return this;
  }

  
   /**
   * Remove tokens
   */
  public clear() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userInfo');
  }
}
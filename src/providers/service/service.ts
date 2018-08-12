import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL_API } from "../../conts/main";

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
	constructor(public http: HttpClient) {
		console.log("Hello ServiceProvider Provider");
	}

	/**
	 *
	 * @param limit numero de resultados que podem ser retornados.
	 * @param offset quandos resultados ira pulas.
	 */
	getNews(limit, offset) {
		return this.http.get(`${URL_API}/posts?per_page=${limit}&offset=${offset}`);
	}

	/**
	 *
	 * @param limit numero de resultados que podem ser retornados.
	 * @param offset quandos resultados ira pulas.
	 */
	getPostByCategory(limit, offset, cat) {
		return this.http.get(`${URL_API}/bookingsapp?categories=${cat}&per_page=${limit}&offset=${offset}`);
	}

	/**
	 *
	 * @param id
	 * @description returns the post from a given post id.
	 * @returns {Object}
	 */
	getPostById(id: number) {
		return this.http.get(`${URL_API}/posts/${id}?_embed`);
	}

	/**
	 *
	 * @param id category ID
	 */
	getCategory(id: number) {
		return this.http.get(`${URL_API}/categories/${id}`);
	}
}

import { LoadingController } from 'ionic-angular'
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AppGloble {

	// 接口基础地址
	static domain = "http://172.16.50.133:18400/";

	// 接口地址
	static API: any = {
		getCategories: '/api/ionic3/getCategories',
		getProducts: '/api/ionic3/getProducts',
		getDetails: 'api/ionic3/details'
	};
}

@Injectable()
export class AppService {
	constructor(
		public http: Http,
		public loadingCtrl: LoadingController) {

	}
	httpGet(url, params, callback, loader: boolean = false) {
		let loading = this.loadingCtrl.create({});
		if (loader) {
			loading.present();
		}
		this.http.get(AppGloble.domain + url + this.encode(params))
			.toPromise()
			.then(res =>{
				var d = res.json();
				if(loader){
					loading.dismiss();
				}
				callback(d==null?"[]":d);

			})
			.catch(error =>{
				if(loader){
					loading.dismiss();
				}
				// this.handleError(error);
			})

	}



}
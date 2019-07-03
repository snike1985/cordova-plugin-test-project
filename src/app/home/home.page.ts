import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public curDate = '';

    constructor(private alertController: AlertController) {
    }

    public ngOnInit() {
        console.log(window);
        console.log('SferaIntercom', window['SferaIntercom']);
    }

    public incomingCall() {
        const sferaIntercom = window['SferaIntercom'];
        const incomingCallData = {
            connectionInfo: {
                userName: 'Alex',
                password: '1111',
                domain: 'https://255.255.255.255/'
            },
            callInfo: {
                title: 'Домофон'
            }
        };

        if (sferaIntercom) {
            sferaIntercom.incomingCall(JSON.stringify(incomingCallData), (res) => {
                this.presentEchoAlert(res);
            });
        }
    }

    async presentEchoAlert(res) {
        const alert = await this.alertController.create({
            header: 'Echo',
            subHeader: 'Subtitle',
            message: res,
            buttons: ['OK']
        });

        await alert.present();
    }

}

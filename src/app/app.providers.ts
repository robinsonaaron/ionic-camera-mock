import { ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { CameraMock } from './camera-mock';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
 
export class AppProviders {
 
    public static getProviders() {
        let providers;
 
        if(document.URL.includes('https://') || document.URL.includes('http://')){
          // Use browser providers
          providers = [
            StatusBar,
            SplashScreen,
            {provide: Camera, useClass: CameraMock},
            {provide: ErrorHandler, useClass: IonicErrorHandler}
          ];
        } else {
          // Use device providers
          providers = [
            StatusBar,
            SplashScreen,
            Camera,
            {provide: ErrorHandler, useClass: IonicErrorHandler}
          ]; 
        }
        return providers;
    }
}
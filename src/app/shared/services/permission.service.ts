import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { AuthGuard } from "../guards/auth.guard";

@Injectable({
    providedIn: 'root'
})
export class PermissionService  {

    hasPermission(component : any): Observable<boolean> {
        let res = false; 
        if(true) { // AuthGuard.isLoggedIn()
        // Check if user object has permissions to access the current component.
            res  = this.checkPermission(component.data.permission);
        }
        return of(res);
    }

    private getPermissions() : Array<string> {
        return ['view-profile', 'edit-profile'];
    }
    private checkPermission(permission: string): boolean {
        // Get permissions from user object.
        let permissions = this.getPermissions();

        return permissions.includes(permission);
    }
}
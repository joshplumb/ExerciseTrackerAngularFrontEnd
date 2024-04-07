import { Inject, Injectable } from "@angular/core";
import { Exercise } from "./exercise-model";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";

@Injectable({
    providedIn: 'root'
})
export class ExerciseService {

    private apiUrl = "https://localhost:7163/api/Exercise";

    constructor(private _http: HttpClient) {}
    
    // all collapsed methods have the same inner logic as getAllExercises()
    getAllExercises(): Observable<any>{
        return this._http.get(this.apiUrl)
        .pipe(
            map((response: any) => {
                return response;
            })
        );
    }
    getExerciseByID(id: number): Observable<any>{
        return this._http.get(`${this.apiUrl}/${id}`)
        .pipe(
            map((response: any) => {
                return response;
            })
        );
    }
    createExercise(exercise: Exercise): Observable<any>{
        return this._http.post(`${this.apiUrl}`, exercise)
        .pipe(
            map((response: any) => {
                return response;
            })
        );
    }
    updateExercise(exercise: Exercise): Observable<any>{
        return this._http.put(`${this.apiUrl}`, exercise)
        .pipe(
            map((response: any) => {
                return response;
            })
        );
    }
    deleteExercise(id: number): Observable<any>{
        return this._http.delete(`${this.apiUrl}/${id}`)
        .pipe(
            map((response: any) => {
                return response;
            })
        );
    }
}
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, updateDoc, addDoc, DocumentReference, query, where, getDocs } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { deleteDoc } from '@angular/fire/firestore';

export interface Reward {
  id?: string;
  nome: string;
  ra: number;
  estrelasAtuais: number;
  estrelasAnteriores: number;
  premiosColetados: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RewardsService {
  constructor(private firestore: Firestore) { }

  getRewards(): Observable<Reward[]> {
    const rewardsCollection = collection(this.firestore, 'rewards');
    return collectionData(rewardsCollection, { idField: 'id' }) as Observable<Reward[]>;
  }

  addReward(reward: Reward): Observable<string> {
    const rewardsCollection = collection(this.firestore, 'rewards');
    return from(addDoc(rewardsCollection, reward)).pipe(
      map((docRef: DocumentReference) => docRef.id)
    );
  }

  deleteReward(id: string): Observable<void> {
    const docRef = doc(this.firestore, `rewards/${id}`);
    return from(deleteDoc(docRef));
  }

  updateReward(id: string, data: Partial<Reward>): Observable<void> {
    const docRef = doc(this.firestore, `rewards/${id}`);
    return from(updateDoc(docRef, data));
  }

  getStudentSaldo(ra: number): Observable<Reward | null> {
    const studentsCollection = collection(this.firestore, 'rewards');
    const studentQuery = query(studentsCollection, where('ra', '==', ra));
    return from(getDocs(studentQuery)).pipe(
      map(snapshot => snapshot.empty ? null : snapshot.docs[0].data() as Reward)
    );
  }
}
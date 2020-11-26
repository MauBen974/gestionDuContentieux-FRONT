import { Component, OnInit } from '@angular/core';
import { Phase } from 'app/model/phase';
import { Tache } from 'app/model/tache';
import { PhaseService } from 'app/service/phase.service';
import { TacheService } from 'app/service/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {

  idTache: number;
  idPhase: number;
  libellePhase : String;
  statusAudience : Boolean;
  idTribunal: number;

  tacheStored : Tache;
  taches: Tache[];
  tache: Tache = new Tache();
  phases: Phase[];
  phase: Phase = new Phase();

  constructor(private tacheService: TacheService, private phaseService: PhaseService) { }

  ngOnInit() {
    // this.findByIdUtilisateur();
    this.findAllPhase();
  }

  findByIdUtilisateur(){
    this.tacheService.findByIdUtilisateur(parseInt(localStorage.getItem('id'))).subscribe();
  }

  findAllTache() {
    this.tacheService.getAll().subscribe(data => { this.taches= data});
  }

  findAllPhase() {
    this.phaseService.getAll().subscribe(data => { this.phases= data});
  }

  deleteTache(tache) {
    this.tacheService.delete(tache.id).subscribe(() => { this.findByIdUtilisateur() });
  }

  deletePhase(phase) {
    this.phaseService.delete(phase.id).subscribe(() => { this.findByIdUtilisateur() });
  }

  saveTache() {
    this.tacheService.save(this.tache).subscribe(() => {
      this.tache = new Tache();
      localStorage.setItem('tacheStored', JSON.stringify(this.tacheStored));
      this.tacheStored = this.tache;
      this.findAllTache();
    }
    )
  }
  savePhase() {
    this.phaseService.save(this.phase).subscribe(() => {
      this.phase = new Phase();
      this.phase.tache = JSON.parse(localStorage.getItem('tacheStored'));
      this.findAllTache();
      localStorage.removeItem('tacheStored');
      
    }
    )
  }

  updateTache(){
    this.tacheService.update(this.idTache, this.tache).subscribe(()=>{
      this.findByIdUtilisateur();
    })
  }

  updateLibelle(){
    this.phaseService.updateLibelle(this.idPhase, this.phase).subscribe(()=>{
      this.findByIdUtilisateur();
    })
  }

  findBylibellePhase(){
    this.tacheService.findBylibellePhase(this.libellePhase).subscribe();
  }

  findByStatusAudience(){
    this.tacheService.findByStatusAudience(this.statusAudience).subscribe();
  }

  findByIdTribunal(){
    this.tacheService.findByIdTribunal(this.idTribunal).subscribe();
  }

  getAllNotTermined(){
    this.phaseService.getAllNotTermined().subscribe();
  }

  findByTache(){
    this.phaseService.findByTache(this.tache).subscribe();
  }
}



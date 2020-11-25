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

  taches: Tache[];
  tache: Tache = new Tache();
  phases: Phase[];
  phase: Phase = new Phase();

  constructor(private tacheService: TacheService, private phaseService: PhaseService) { }

  ngOnInit() {
    // this.findByIdUtilisateur();
    this.findAllTache();
  }

  // findByIdUtilisateur(){
  //   this.tacheService.findByIdUtilisateur(idARECUP).subscribe();
  // }

  findAllTache() {
    this.tacheService.getAll().subscribe();
  }

  findAllPhase() {
    this.phaseService.getAll().subscribe();
  }

  deleteTache(tache) {
    this.tacheService.delete(tache.id).subscribe(() => { this.findAllTache() });
  }

  deletePhase(phase) {
    this.phaseService.delete(phase.id).subscribe(() => { this.findAllPhase() });
  }

  saveTache() {
    this.tacheService.save(this.tache).subscribe(() => {
      this.findAllTache();
      this.tache = new Tache();
    }
    )
  }
  savePhase() {
    this.phaseService.save(this.phase).subscribe(() => {
      this.findAllTache();
      this.phase = new Phase();
    }
    )
  }

  updateTache(){
    this.tacheService.update(this.idTache, this.tache).subscribe(()=>{
      this.findAllTache();
    })
  }

  updateLibelle(){
    this.phaseService.updateLibelle(this.idPhase, this.phase).subscribe(()=>{
      this.findAllTache();
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



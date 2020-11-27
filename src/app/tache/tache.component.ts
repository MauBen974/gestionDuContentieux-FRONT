import { Component, OnInit } from '@angular/core';
import { Phase } from 'app/model/phase';
import { Tache } from 'app/model/tache';
import { PhaseService } from 'app/service/phase.service';
import { TacheService } from 'app/service/tache.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {

  idTache: number;
  idPhase: number;
  libellePhase: String;
  statusAudience: Boolean;
  idTribunal: number;

  tacheStored: Tache;
  taches: Tache[];
  tache: Tache = new Tache();
  phases: Phase[];
  phase: Phase = new Phase();

  modifLibelle = false;
  modifTache = false;

  constructor(private tacheService: TacheService, private phaseService: PhaseService) { }

  ngOnInit() {
    // this.findByIdUtilisateur();
    this.findAllPhase();
  }

  findByIdUtilisateur() {
    this.tacheService.findByIdUtilisateur(parseInt(localStorage.getItem('id'))).subscribe();
  }

  findAllTache() {
    this.tacheService.getAll().subscribe(data => { this.taches = data });
  }

  findAllPhase() {
    this.phaseService.getAll().subscribe(data => { this.phases = data });
  }

  deleteTache(tache) {
    this.tacheService.delete(tache.id).subscribe(() => { this.findByIdUtilisateur() });
  }


  saveTAndP() {
    this.tacheService.save(this.tache).subscribe(t => {
      console.log(t.idTache);
      this.phase.tache = t;
      this.phase.libellePhase = this.libellePhase;
      console.log(this.phase.tache.idTache);
      console.log(this.phase.libellePhase);
      this.phaseService.save(this.phase).subscribe(p => {
        console.log(p.libellePhase);
        console.log(p);
        this.libellePhase = new String();
        this.findAllPhase();
      })
    })
    this.tache = new Tache();
    this.phase = new Phase();
  }

   deletePhase(p: Phase) {
    this.phaseService.delete(p.idPhase).subscribe(() => {
      this.findAllPhase();
    })
  }

  deleteTandP(p: Phase) {
    this.tacheService.delete(p.tache.idTache).subscribe(() => {
    })
    this.phaseService.delete(p.idPhase).subscribe(() => {
      this.findAllPhase();
    })
  }

  findOnePhase(p: Phase) {
    this.phaseService.findOne(p.idPhase).subscribe(p1 => {
      this.phase = p1;
      this.modifLibelle=true;
    })
  }

  updateLibellePhase(p: Phase) {
    this.phaseService.updateLibelle(p.idPhase, this.phase).subscribe(() => {
      this.findAllPhase();
      this.phase = new Phase;
      this.modifLibelle=false;
    })
  }

  findOneTache(t : Tache) {
    this.tacheService.findOne(t.idTache).subscribe(t1 => {
      this.tache = t1;
      this.modifTache=true;
    })
  }

  updateTache(t: Tache) {
    this.tacheService.update(t.idTache, this.tache).subscribe(()=>{
      this.findAllPhase();
      this.tache = new Tache();
      this.modifTache=false;
    })
  }

  saveTache() {
    this.tacheService.save(this.tache).subscribe(() => {
      this.tacheStored = this.tache;
      localStorage.setItem('tacheStored', JSON.stringify(this.tacheStored));
      console.log(this.tacheStored)
      this.tache = new Tache();
      this.findAllTache();
    }
    )
  }

  savePhase() {
    console.log(this.tacheStored)
    this.phase.tache = JSON.parse(localStorage.getItem('tacheStored'));
    console.log(this.phase.tache)
    this.phaseService.save(this.phase).subscribe(() => {
      this.phase = new Phase();
      this.findAllTache();
      localStorage.removeItem('tacheStored');
    }
    )
  }

  updateLibelle() {
    this.phaseService.updateLibelle(this.idPhase, this.phase).subscribe(() => {
      this.findByIdUtilisateur();
    })
  }

  findBylibellePhase() {
    this.tacheService.findBylibellePhase(this.libellePhase).subscribe();
  }

  findByStatusAudience() {
    this.tacheService.findByStatusAudience(this.statusAudience).subscribe();
  }

  findByIdTribunal() {
    this.tacheService.findByIdTribunal(this.idTribunal).subscribe();
  }

  getAllNotTermined() {
    this.phaseService.getAllNotTermined().subscribe();
  }

  findByTache() {
    this.phaseService.findByTache(this.tache).subscribe();
  }
}



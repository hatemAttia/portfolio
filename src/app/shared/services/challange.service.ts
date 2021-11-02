import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChallangeService {
  challange=[{
    "title":"Green Night 2020",
    "date":"November 27, 2020",
    "equipe":"genius",
    "images":["MAQUETTE.png","greenmaas.jpg"],
    "description":"MaaS se base sur un concept qui place la mobilité en tant que commodité pour le citoyen. Cette tendance vise à intégrer les modes de transport privés (voiture, taxi, bus, ..) et publics(métro, train, bus, avion, ...) pour se rendre d'un point A versun point B. Le concept décrit un passage des modes de transport personnels à la mobilité fournie en tant que service. MaaS estainsi un type de service qui, via un canal numérique commun,permet aux utilisateurs de planifier, réserver et payer pourplusieurs types de services de mobilité."
  },
  {
    "title":"NUIT DE L'INFO 2020",
    "date":"Decembre 3&4, 2020",
    "equipe":"codify",
    "images":["carboncode.png","nuitcarbon.png"],
    "description":"Aujourd'hui, l'impact Carbone de nos gestes du quotidien ainsi que celui de nos applications est de plus en plus exploité par l'ensemble de la société sans réellement nous permettre de le quantifier et de le comprendre. Dans le cadre de ton projet principal, vous trouverez un moyen ludique pour permettre aux utilisateurs de prendre conscience de l'impact de leurs choix (pastille de couleur, personnages, etc)."
  },
  {
    "title":"NUIT DE L'INFO 2020",
    "date":"Decembre 3&4, 2020",
    "equipe":"codify",
    "images":["nuitvectoriya.png",""],
    "description":"Lors de la conception d'une application, la bonne gestion des secrets permet d'augmenter très fortement le niveau de sécurité de l'application déployé et d'éviter les fuites de données ou encore la compromission des systèmes. Outscale vous lance donc le défi suivant : intégrer dans votre architecture (infrastructure et logiciel) la protection des secrets (mot de passe des utilisateurs, des systèmes, des équipements ...)"
  },
  {
    "title":"NUIT DE L'INFO 2019",
    "date":"Decembre 3&4, 2019",
    "equipe":"genius",
    "images":["nuitDinfo2019.jpg",""],
    "description":""
  }]

  constructor() {   }

   getChallanges(){
     return this.challange;
   }
}

const swal = {
  error: 'Erreur',
  publisherInOtherTeam: 'Une proclamateur sélectionné est déjà inscrit dans une autre équipe. Merci de commencer par l\'enlever de cette équipe.',
  onlyTeam: 'Tu ne peux pas effacer cette équipe, qui est la seule pour cette plage horaire. Chaque plage horaire doit comporter au moins une équipe.',
  noTeamleader: 'Chaque équipe a besoin d\'un responsable. Cependant ce proclamateur n\'a pas l\'autorisation de servir comme responsable d\'équipe.',
  ownPermission: 'Tu n\'as pas l\'autorisation de modifier tes propres autorisations. Un autre administrateur devra le faire.',
  approvalInformed: 'Ce participant a été informé que sa demande a été approuvée.',
  declinementInformed: 'Ce participant a été informé que sa demande a été rejetée.',
  vacationEndInPast: 'La date de fin ne peut pas se trouver dans le passé.',
  missingTag: 'Pas d\'étiquette définie. Merci de définir une étiquette sous Admin > Paramètres',
  logout: {
    title: 'Suggestion',
    text: 'Il n\'est pas nécessaire de se déconnecter, sauf si tu te trouves sur un  ordinateur partagé ou public. La connection est chiffrée et uniquement les informations de la session courante se trouvent dans ton navigateur local. Personne d\'autre peut voir ou détourner les informations de ta session.',
    confirm: 'Se déconnecter',
    cancel: 'Annuler'
  },
  invite: {
    user: {
      title: 'Invite ce proclamateur?',
      text: 'Ce proclamateur <b>a déjà un compte</b>, donc il n\'y a pas besoin d\'en créer un supplémentaire. Le proclamateur sera <b> ajouté pour ce projet</b>.<br>Bien évidemment <b>nous l\'informerons</b> concernant cette modification. <br><p>Si une même adresse E-mail est utilisée pour l\'enregistrement de plusieurs proclamateurs, s\'il te plaît choisis l\'option adéquate:</p>'
    },
    users: {
      title: 'Es-tu certain?',
      text: 'Nous enverrons un E-mail à tous les proclamateurs sélectionnés.',
      confirm: 'Inviter',
      cancel: 'Annuler'
    }
  },
  sendMail: {
    confirmWeek: {
      title: 'Es-tu certain?',
      text: 'Tous les proclamateurs approuvés dans l\'équipe recevront un E-mail de participation confirmée et les autres un E-mail d\'inscription rejetée.',
      confirm: 'Oui',
      cancel: 'Annuler'
    },
    confirmation: {
      title: 'Informer les proclamateurs?',
      text: 'Les proclamateurs seront informés par E-mail de leur participation confirmée.',
      confirm: 'Oui',
      cancel: 'Annuler'
    },
    declined: {
      title: 'Informer les proclamateurs?',
      text: 'Les proclamateurs seront informés par E-mail que leur inscription est rejetée.',
      confirm: 'Oui',
      cancel: 'Annuler'
    },
    selectTag: {
      title: 'Quelle étiquette?',
      text: 'Sélectionne l\'étiquette désirée pour l\'envoi de confirmations par E-mail:',
      confirm: 'OK',
      cancel: 'Annuler'
    },
    teamUpdate: {
      user: {
        title: 'Responsable d\'équipe déjà informé',
        text: 'Le Responsable d\'équipe est déjà informé. Souahites-tu lui envoyer un E-mail avec les modifications concernant cette équipe?',
        confirm: 'Oui',
        cancel: 'Non'
      },
      general: {
        title: 'Es-tu certain?',
        text: 'Les proclamateurs déjà informés recevront un E-mail avec les modifications concernant cette équipe.',
        confirm: 'Oui',
        cancel: 'Non'
      }
    },
    understaffed: {
      title: 'Informer les proclamateurs?',
      text: 'Informer tous les proclamateurs que cette équipe est en sous-effectif ?',
      confirm: 'Oui',
      cancel: 'Non',
      teamleader: {
        title: 'Informer le responsables d\'équipe ?',
        text: 'Informer tous les responsables d\'équipe à propos de cette équipe?',
        confirm: 'Oui',
        cancel: 'Non'
      }
    }
  },
  add: {
    meeting: {
      title: 'Ajouter un nouveau point de rendez-vous',
      text: '',
      placeholder: 'Nome',
      confirm: 'Ajouter',
      cancel: 'Annuler'
    },
    question: {
      title: 'Ajouter une nouvelle question ou titre',
      text: '',
      placeholder: 'Question/Titre',
      inputError: 'Tu dois écrire quelque chose!',
      confirm: 'Ajouter',
      cancel: 'Annuler'
    },
    tab: {
      title: 'Ajouter un nouvel onglet',
      text: '',
      placeholder: 'Titre',
      inputError: 'Nom d\'onglet invalide!',
      confirm: 'Ajouter',
      cancel: 'Annuler'
    },
    tag: {
      title: 'Ajouter une nouvelle étiquette',
      text: '',
      placeholder: 'Nom',
      inputError: 'Nom d\'étiquette invalide!',
      confirm: 'Créer',
      cancel: 'Annuler'
    },
    team: {
      title: 'Ajouter une nouvelle équipe',
      text: '',
      placeholder: 'Nom',
      inputError: 'Nom d\'équipe invalide!',
      confirm: 'Ajouter',
      cancel: 'Annuler'
    },
    template: {
      title: 'Ajouter un modèle',
      text: '',
      placeholder: 'Nom',
      inputError: 'Nom de modèle invalide!',
      confirm: 'Ajouter',
      cancel: 'Annuler'
    },
    user: {
      title: 'Créé!',
      text: 'L\'utilisateur a été créé.'
    },
    users: {
      title: 'Es-tu certain?',
      text: 'Tous les proclamateurs qui sont affichés seront ajoutés au projet.',
      confirm: 'Ajouter',
      cancel: 'Annuler'
    }
  },
  update: {
    file: {
      title: 'Changer le nom de fichier',
      text: '',
      placeholder: 'Nom de fichier',
      inputError: 'Nom de fichier invalide!',
      confirm: 'Changer',
      cancel: 'Annuler'
    },
    password: {
      title: 'Changer le mot de passe',
      passwordOld: 'Précédent mot de passe',
      passwordNew1: 'Nouveau mot de passe',
      passwordNew2: 'Répéter le nouveau nouveau mot de passe',
      confirm: 'Changer',
      cancel: 'Annuler',
      passwordChanged: 'Mot de passe changé'
    },
    question: {
      title: 'Changer la question',
      text: '',
      placeholder: 'Question/Title',
      confirm: 'Changer',
      cancel: 'Annuler'
    },
    template: {
      title: 'Editer le nom',
      text: '',
      placeholder: 'Nom',
      confirm: 'Changer',
      cancel: 'Annuler'
    }
  },
  delete: {
    account: {
      title: 'Veux-tu vraiment effacer ton compte?',
      text: 'Cette action effacera de manière irreversible le compte!',
      confirm: 'effacer my Account!',
      cancel: 'Annuler'
    },
    allShifts: {
      title: 'Es-tu certain?',
      text: 'Cette action effacera de manière irreversible toutes les plages horaires de cette journée et toute le demande pour ces plages horaires.',
      confirm: 'effacer',
      cancel: 'Annuler'
    },
    file: {
      title: 'Es-tu certain?',
      text: 'Cette action effacera de manière irreversible le fichier.',
      confirm: 'Effacer',
      cancel: 'Annuler'
    },
    language: {
      title: 'Veux-tu vraiment effacer cette langue?',
      text: 'Cette action effacera de manière irreversible cette langue avec son stock.',
      confirm: 'Effacer',
      cancel: 'Annuler'
    },
    meeting: {
      title: 'Veux-tu vraiment effacer ce point de rendez-vous?',
      text: 'Le point de rendez-vous sera aussi enlevé de toutes les plages horaires existantes dans le futur.',
      checkInput: 'Effacer',
      placeholder: 'Merci de saisir "{{0}}" pour confirmer',
      inputError: 'L\'entrée saisie ne correspond pas avec "{{0}}"',
      confirm: 'Effacer',
      cancel: 'Annuler'
    },
    note: {
      title: 'Veux-tu vraiment effacer cette note?',
      text: 'Cette action effacera de manière irreversible la note.',
      confirm: 'Effacer',
      cancel: 'Annuler'
    },
    project: {
      title: 'Veux-tu vraiment effacer ce projet?',
      text: 'Cette action effacera de manière irreversible toutes les configurations associées à ce projet, par ex. plages horaires, rapport, demande, publications, etc. Uniquement les comptes utilisateur seront maintenus.',
      checkInput: 'Effacer ce projet',
      placeholder: 'Merci de saisir "{{0}}" pour confirmer',
      inputError: 'L\'entrée saisie ne correspond pas avec "{{0}}"',
      confirm: 'Effacer',
      cancel: 'Annuler'
    },
    publication: {
      title: 'Enlève cette publication de ton stock?',
      text: 'Tu perdras toutes les données enregistrées pour cette publication.',
      confirm: 'Enlever',
      cancel: 'Annuler'
    },
    question: {
      title: 'Es-tu certain?',
      text: 'Cette action effacera de manière irreversible la question et ses réponses.',
      confirm: 'Effacer',
      cancel: 'Annuler'
    },
    shift: {
      title: 'Veux-tu vraiment Effacer this shift?',
      text: 'Toutes les demandes pour cette plage horaire seront rejetée.',
      confirm: 'Effacer',
      cancel: 'Annuler'
    },
    store: {
      title: 'Veux-tu vraiment mettre à zéro le stock?',
      text: 'Cette action effacera de manière irreversible les publications ajoutées.',
      confirm: 'Mettre à zéro',
      cancel: 'Annuler'
    },
    tab: {
      title: 'Es-tu certain?',
      text: 'Cette action effacera de manière irreversible l\'onglet en entier incluant toutes les questions.',
      confirm: 'Effacer',
      cancel: 'Annuler'
    },
    tag: {
      title: 'Veux-tu vraiment effacer l\'étiquette?',
      text: 'Cette action effacera de manière irreversible toutes les plages horaires appartenant à cette étiquette, incluant toutes les inscriptions concernant cette plage horaire. <br><br> Saisir "effacer" pour confirmer.',
      checkInput: 'Effacer',
      placeholder: 'Merci de saisir "{{0}}" pour confirmer',
      inputError: 'L\'entrée saisie ne correspond pas avec "{{0}}"',
      confirm: 'Effacer',
      cancel: 'Annuler'
    },
    team: {
      title: 'Veux-tu vraiment effacer cette équipe?',
      text: 'L\'équipe sera enlevée de toutes les plages horaires existantes et planifiées dans le future. Les inscription approuvée pour cette plage horaire seront replacée dans d\'autres équipes. <br><br> Saisir "effacer" pour confirmer.',
      checkInput: 'Effacer',
      placeholder: 'Merci de saisir "{{0}}" pour confirmer',
      inputError: 'L\'entrée saisie ne correspond pas avec "{{0}}"',
      confirm: 'Effacer',
      cancel: 'Annuler'
    },
    template: {
      title: 'Veux-tu vraiment effacer le modèle?',
      text: '',
      confirm: 'Effacer',
      cancel: 'Annuler'
    },
    user: {
      title: 'Veux-tu vraiment effacer this user?',
      text: 'Toutes les permissions du projet seront révoquées.',
      confirm: 'Effacer',
      cancel: 'Annuler'
    }
  },
  request: {
    approve: {
      title: 'Veux-tu vraiment approuver le proclamateur?',
      text: 'L\'inscription de ce proclamateur avait été précédemment rejetée. Donc merci de vérifier que ce proclamateur puisse participer au projet.',
      confirm: 'Oui',
      cancel: 'Non'
    },
    cancel: {
      title: 'Es-tu certain?',
      text: 'L\'équipe sera enlevée si tu es le dernier participant.',
      confirm: 'Oui, annulle ma participation',
      cancel: 'Non'
    },
    decline: {
      title: 'Veux-tu vraiment rejeté le participant?',
      text: 'Si le participant avait reçu une confirmation, il recevra par email l\'information d\'inscription rejetée.',
      confirm: 'Oui',
      cancel: 'Non'
    },
    maxReached: {
      title: 'Trop de participants sélectionnés',
      text: 'Configure le nombre maximum pour l\'équipe, de {{0}} à {{1}} et approuve les sélectionnés?',
      confirm: 'Approuver les sélectionnés',
      cancel: 'Annuler'
    },
    minNotReached: {
      title: 'Nombre insuffisant de participants sélectionnés',
      text: 'Configure le nombre minimum pour l\'équipe, de {{0}} to {{1}} et approuve les sélectionnés?',
      confirm: 'Approuver les sélectionnés',
      cancel: 'Annuler'
    },
    minReached: {
      title: 'Veux-tu vraiment rejeter le participant?',
      text: 'Cette équipe a atteint le nombre minimal de participatns. Si tu rejète ce participant, le système effacera cette équipe.',
      confirm: 'Effacer l\'équipe',
      cancel: 'Non'
    },
    noNewTeamleader: {
      title: 'Veux-tu vraiment rejeter le participant?',
      text: 'Il n\'y a pas d\'autres responsables d\'équipe pour cette équipe. If you declSi tu rejette ce participant, le système effacera cette équipe.',
      confirm: 'Effacer l\'équipe',
      cancel: 'Non'
    }
  }
}

export default swal

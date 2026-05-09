// ============================================
// CALENDRIER.JS — Gestion des jours et horaires
// ============================================

// Horaires disponibles (vous pouvez modifier cette liste)
const HORAIRES_DISPONIBLES = [
  '08:00 - 09:00',
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
  '17:00 - 18:00',
  '20:00 - 21:00',
  '23:00 - 00:00',
]

// -----------------------------------------------
// FONCTION PRINCIPALE : génère les jours du mois
// -----------------------------------------------
export function genererJours(mois, annee) {
  const conteneur = document.getElementById('calendar-days')
  if (!conteneur) return
  conteneur.innerHTML = ''

  const aujourd_hui = new Date()
  aujourd_hui.setHours(0, 0, 0, 0)

  // Premier jour du mois (0=lun, 1=mar... en décalant car JS commence dimanche)
  const premierJour = new Date(annee, mois, 1)
  let jourSemaine = premierJour.getDay() // 0=dim, 1=lun...
  if (jourSemaine === 0) jourSemaine = 7  // dimanche = 7

  // Dernier jour du mois précédent
  const dernierJourPrecedent = new Date(annee, mois, 0).getDate()

  // Nombre de jours dans le mois actuel
  const nbJours = new Date(annee, mois + 1, 0).getDate()

  // --- Jours du mois PRÉCÉDENT (cases grises à gauche) ---
  for (let i = jourSemaine - 1; i > 0; i--) {
    const btn = document.createElement('button')
    btn.className = 'cal-day other-month'
    btn.textContent = dernierJourPrecedent - i + 1
    btn.disabled = true
    conteneur.appendChild(btn)
  }

  // --- Jours du mois ACTUEL ---
  for (let j = 1; j <= nbJours; j++) {
    const dateJour = new Date(annee, mois, j)
    dateJour.setHours(0, 0, 0, 0)

    const btn = document.createElement('button')
    btn.textContent = j

    if (dateJour < aujourd_hui) {
      // Jour passé — rouge/grisé
      btn.className = 'cal-day past'
      btn.disabled = true

    } else if (dateJour.getTime() === aujourd_hui.getTime()) {
      // Aujourd'hui — point bleu
      btn.className = 'cal-day today'
      btn.disabled = true
      const dot = document.createElement('span')
      dot.className = 'today-dot'
      btn.appendChild(dot)

    } else {
      // Jour disponible — bleu clair, cliquable
      btn.className = 'cal-day available'
      btn.addEventListener('click', () => {
        // Enlever "selected" de tous les autres jours
        document.querySelectorAll('.cal-day.selected').forEach(el => {
          el.classList.remove('selected')
        })
        // Ajouter "selected" sur le jour cliqué
        btn.classList.add('selected')

        // Afficher les horaires
        afficherHoraires(j, mois, annee)
      })
    }

    conteneur.appendChild(btn)
  }

  // --- Jours du mois SUIVANT (cases grises à droite) ---
  const totalCases = conteneur.children.length
  const casesRestantes = totalCases % 7 === 0 ? 0 : 7 - (totalCases % 7)
  for (let k = 1; k <= casesRestantes; k++) {
    const btn = document.createElement('button')
    btn.className = 'cal-day other-month'
    btn.textContent = k
    btn.disabled = true
    conteneur.appendChild(btn)
  }
}

// -----------------------------------------------
// FONCTION : affiche les horaires sous le calendrier
// -----------------------------------------------
function afficherHoraires(jour, mois, annee) {
  const section = document.getElementById('horaires-section')
  const dateLabel = document.getElementById('horaires-date')
  const grid = document.getElementById('horaires-grid')

  if (!section || !dateLabel || !grid) return

  // Noms des mois en français
  const nomsMois = [
    'janvier','février','mars','avril','mai','juin',
    'juillet','août','septembre','octobre','novembre','décembre'
  ]

  // Afficher la date sélectionnée
  dateLabel.textContent = `${jour} ${nomsMois[mois]} ${annee}`

  // Vider les anciens horaires
  grid.innerHTML = ''

  // Créer un bouton pour chaque horaire
  HORAIRES_DISPONIBLES.forEach(horaire => {
    const btn = document.createElement('button')
    btn.className = 'horaire-btn'
    btn.textContent = horaire

    btn.addEventListener('click', () => {
      // Enlever "selected" des autres horaires
      document.querySelectorAll('.horaire-btn.selected').forEach(el => {
        el.classList.remove('selected')
      })
      // Sélectionner cet horaire
      btn.classList.add('selected')

      // Mettre à jour le label avec l'horaire choisi
      dateLabel.textContent = `${jour} ${nomsMois[mois]} ${annee} - ${horaire.split(' - ')[0]}`
    })

    grid.appendChild(btn)
  })

  // Afficher la section horaires (enlever 'hidden')
  section.classList.remove('hidden')
}

// -----------------------------------------------
// INITIALISATION : appelée au chargement de la page
// -----------------------------------------------
export function initCalendrier() {
  const selectMois = document.getElementById('select-mois')
  const selectAnnee = document.getElementById('select-annee')
  const btnPrev = document.getElementById('prev-month')
  const btnNext = document.getElementById('next-month')

  if (!selectMois || !selectAnnee) return

  // Générer le calendrier au départ
  genererJours(parseInt(selectMois.value), parseInt(selectAnnee.value))

  // Quand on change le mois
  selectMois.addEventListener('change', () => {
    document.getElementById('horaires-section')?.classList.add('hidden')
    genererJours(parseInt(selectMois.value), parseInt(selectAnnee.value))
  })

  // Quand on change l'année
  selectAnnee.addEventListener('change', () => {
    document.getElementById('horaires-section')?.classList.add('hidden')
    genererJours(parseInt(selectMois.value), parseInt(selectAnnee.value))
  })

  // Bouton mois précédent
  btnPrev?.addEventListener('click', () => {
    let m = parseInt(selectMois.value)
    let a = parseInt(selectAnnee.value)
    if (m === 0) { m = 11; a-- } else { m-- }
    selectMois.value = m
    selectAnnee.value = a
    document.getElementById('horaires-section')?.classList.add('hidden')
    genererJours(m, a)
  })

  // Bouton mois suivant
  btnNext?.addEventListener('click', () => {
    let m = parseInt(selectMois.value)
    let a = parseInt(selectAnnee.value)
    if (m === 11) { m = 0; a++ } else { m++ }
    selectMois.value = m
    selectAnnee.value = a
    document.getElementById('horaires-section')?.classList.add('hidden')
    genererJours(m, a)
  })
}
import './SelectActivite2.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function SelectActivite2() {
    const navigate = useNavigate()
    const [selectedTerrain, setSelectedTerrain] = useState(null)
    const [selectedVille, setSelectedVille] = useState('all')
    const [selectedActivite, setSelectedActivite] = useState('')

    // Données des terrains
    const terrains = [
        {
            id: 1,
            nom: "Terrain 1 - Complexe Al Amal",
            type: "Football",
            ville: "Casablanca",
            prix: "250 MAD/h",
            capacity: "22 joueurs",
            image: "https://images.unsplash.com/photo-1459865264687-287d4539c1ac?w=400&h=250&fit=crop",
            activite: "football"
        },
        {
            id: 2,
            nom: "Terrain 2 - Arenas Sport",
            type: "Football",
            ville: "Rabat",
            prix: "220 MAD/h",
            capacity: "20 joueurs",
            image: "https://images.unsplash.com/photo-1522778119029-d64f787b6d97?w=400&h=250&fit=crop",
            activite: "football"
        },
        {
            id: 3,
            nom: "Terrain Central - Tennis Club",
            type: "Tennis",
            ville: "Casablanca",
            prix: "180 MAD/h",
            capacity: "4 joueurs",
            image: "https://images.unsplash.com/photo-1622279457486-62fccd2e3a6e?w=400&h=250&fit=crop",
            activite: "tennis"
        },
        {
            id: 4,
            nom: "Court 2 - Tennis Academy",
            type: "Tennis",
            ville: "Marrakech",
            prix: "190 MAD/h",
            capacity: "4 joueurs",
            image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e2f0?w=400&h=250&fit=crop",
            activite: "tennis"
        },
        {
            id: 5,
            nom: "Basket Arena",
            type: "Basketball",
            ville: "Tanger",
            prix: "280 MAD/h",
            capacity: "10 joueurs",
            image: "https://images.unsplash.com/photo-1505666287802-931dc83b9223?w=400&h=250&fit=crop",
            activite: "basketball"
        },
        {
            id: 6,
            nom: "Hoops Center",
            type: "Basketball",
            ville: "Casablanca",
            prix: "260 MAD/h",
            capacity: "12 joueurs",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=250&fit=crop",
            activite: "basketball"
        },
        {
            id: 7,
            nom: "Piscine Olympique",
            type: "Natation",
            ville: "Rabat",
            prix: "150 MAD/h",
            capacity: "50 personnes",
            image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=250&fit=crop",
            activite: "natation"
        },
        {
            id: 8,
            nom: "Aqua Sport Center",
            type: "Natation",
            ville: "Casablanca",
            prix: "160 MAD/h",
            capacity: "40 personnes",
            image: "https://images.unsplash.com/photo-1530549387789-4c1017266632?w=400&h=250&fit=crop",
            activite: "natation"
        },
        {
            id: 9,
            nom: "Fitness Premium Gym",
            type: "Fitness",
            ville: "Casablanca",
            prix: "120 MAD/séance",
            capacity: "30 personnes",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop",
            activite: "fitness"
        },
        {
            id: 10,
            nom: "BodyFit Studio",
            type: "Fitness",
            ville: "Marrakech",
            prix: "110 MAD/séance",
            capacity: "25 personnes",
            image: "https://images.unsplash.com/photo-1571902943202-507ec2618e0f?w=400&h=250&fit=crop",
            activite: "fitness"
        }
    ]

    // Villes disponibles
    const villes = [
        { value: 'all', label: 'Toutes les villes' },
        { value: 'Casablanca', label: 'Casablanca' },
        { value: 'Rabat', label: 'Rabat' },
        { value: 'Marrakech', label: 'Marrakech' },
        { value: 'Tanger', label: 'Tanger' }
    ]

    // Activités disponibles
    const activites = [
        { value: '', label: 'Toutes les activités' },
        { value: 'football', label: 'Football' },
        { value: 'tennis', label: 'Tennis' },
        { value: 'basketball', label: 'Basketball' },
        { value: 'natation', label: 'Natation' },
        { value: 'fitness', label: 'Fitness' }
    ]

    // Filtrer les terrains
    const filteredTerrains = terrains.filter(terrain => {
        const matchVille = selectedVille === 'all' || terrain.ville === selectedVille
        const matchActivite = !selectedActivite || terrain.activite === selectedActivite
        return matchVille && matchActivite
    })

    const handleTerrainSelect = (terrainId) => {
        setSelectedTerrain(selectedTerrain === terrainId ? null : terrainId)
    }

    const handleContinue = () => {
        if (selectedTerrain) {
            const terrainData = terrains.find(t => t.id === selectedTerrain)
            navigate('/date-heure', {
                state: {
                    terrain: terrainData,
                    activite: selectedActivite || terrainData.activite
                }
            })
        }
    }

    return (
        <main className="booking-main">
            <div className="form-header">
                <h1>Sélectionnez votre terrain</h1>
                <div className="header-line"></div>
            </div>

            {/* Filtres */}
            <div className="filters-container">
                <div className="filter-group">
                    <label>Activité :</label>
                    <div className="select-wrapper">
                        <select
                            value={selectedActivite}
                            onChange={(e) => setSelectedActivite(e.target.value)}
                        >
                            {activites.map(act => (
                                <option key={act.value} value={act.value}>{act.label}</option>
                            ))}
                        </select>
                        <svg className="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
                </div>

                <div className="filter-group">
                    <label>Ville :</label>
                    <div className="select-wrapper">
                        <select
                            value={selectedVille}
                            onChange={(e) => setSelectedVille(e.target.value)}
                        >
                            {villes.map(ville => (
                                <option key={ville.value} value={ville.value}>{ville.label}</option>
                            ))}
                        </select>
                        <svg className="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
                </div>

                <div className="filter-stats">
                    <span className="stats-badge">
                        {filteredTerrains.length} terrain{filteredTerrains.length > 1 ? 's' : ''} disponible{filteredTerrains.length > 1 ? 's' : ''}
                    </span>
                </div>
            </div>

            {/* Grille des terrains */}
            <div className="terrains-grid">
                {filteredTerrains.length > 0 ? (
                    filteredTerrains.map(terrain => (
                        <div
                            key={terrain.id}
                            className={`terrain-card ${selectedTerrain === terrain.id ? 'selected' : ''}`}
                            onClick={() => handleTerrainSelect(terrain.id)}
                        >
                            <div className="terrain-image">
                                <img src={terrain.image} alt={terrain.nom} />
                                <div className="terrain-type-badge">{terrain.type}</div>
                                {selectedTerrain === terrain.id && (
                                    <div className="selected-check">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            <div className="terrain-info">
                                <h3 className="terrain-name">{terrain.nom}</h3>
                                <div className="terrain-details">
                                    <div className="detail-item">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        <span>{terrain.ville}</span>
                                    </div>
                                    <div className="detail-item">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 6v6l4 2" />
                                        </svg>
                                        <span>{terrain.prix}</span>
                                    </div>
                                    <div className="detail-item">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M17 20v-4a4 4 0 0 0-8 0v4" />
                                            <rect x="3" y="8" width="18" height="12" rx="2" />
                                            <path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
                                        </svg>
                                        <span>{terrain.capacity}</span>
                                    </div>
                                </div>
                                <div className="terrain-description">
                                    Terrain professionnel avec éclairage LED, vestiaires et parking
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <p>Aucun terrain trouvé pour ces critères</p>
                        <button className="reset-filters" onClick={() => {
                            setSelectedActivite('')
                            setSelectedVille('all')
                        }}>
                            Réinitialiser les filtres
                        </button>
                    </div>
                )}
            </div>

            {/* Bouton continuer */}
            <div className="form-actions">
                <button
                    className="btn-continuer"
                    onClick={handleContinue}
                    disabled={!selectedTerrain}
                >
                    Continuer
                </button>
            </div>
        </main>
    )
}

export default SelectActivite2
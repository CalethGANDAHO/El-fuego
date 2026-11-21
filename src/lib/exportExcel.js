import * as XLSX from 'xlsx';

export function exportReservationsToExcel(reservations) {
  if (!reservations || reservations.length === 0) {
    alert("Aucune réservation à exporter.");
    return;
  }

  const rows = reservations.map(r => ({
    "Référence": r.reference,
    "Date": r.date,
    "Heure": r.heure,
    "Couverts": r.personnes,
    "Occasion": r.occasion || "Standard",
    "Client": r.nom,
    "Téléphone": r.telephone,
    "Email": r.email || "",
    "Notes": r.demandes_speciales || "",
    "Statut": r.statut || "CONFIRME",
    "Créé le": r.created_at || ""
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Réservations");

  const today = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(workbook, `Reservations_El_Fuego_${today}.xlsx`);
}

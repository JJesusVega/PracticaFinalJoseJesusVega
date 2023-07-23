using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace PracticaFinalJoseJesusVega.Models;

public partial class Tarea
{
    public int IdTarea { get; set; }

    [MaxLength(100, ErrorMessage = "El nombre no debe contener más de 100 caracteres")]
    [StringLength(100, MinimumLength = 3)]
    [Required]
    public string Persona { get; set; } = null!;

    [MaxLength(500, ErrorMessage = "El nombre no debe contener más de 100 caracteres")]
    [StringLength(500, MinimumLength = 10)]
    [Required]
    public string Tarea1 { get; set; } = null!;

    [MaxLength(10, ErrorMessage = "El estatus no debe contener más de 10 caracteres")]
    public string? EstaCompletada { get; set; }
}

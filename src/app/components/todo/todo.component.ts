import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CdkDragDrop, 
        moveItemInArray, 
        transferArrayItem, 
        CdkDrag, 
        CdkDropList 
      } from '@angular/cdk/drag-drop';

interface TareasAlmacenadas {
  pendientes: string[];
  produccion: string[];
  completadas: string[];
  
}

// Define los nombres exactos de las propiedades de tu clase que son arrays.
type NombreDeTabla = 'pendientes' | 'produccion' | 'completadas';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule, CdkDropList, CdkDrag],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

export class TodoComponent  implements OnInit {
  nuevaTarea: string = '';
  pendientes: string[] = [];
  produccion: string[] = [];
  completadas: string[] = [];
  tareaEditar: string = '';
  editando: boolean = false;

  private readonly STORAGE_KEY = 'todasLasListasDeTareas'; 

  constructor() {}

  ngOnInit(): void {
    this.CargarDesdeLocalStorage();
  }

  CargarDesdeLocalStorage() {
    //1."Primero con la constante guardo los datos que se hayan guardados"
    const tareasGuardadas = localStorage.getItem(this.STORAGE_KEY); 
    //2."Compruebo que esa variable tenga información y si tiene...":
    if (tareasGuardadas) {
      try {
        // 3. "Parseo los datos guardados uso JSON.parse() para convertir ese texto en un objeto JavaScript real y usable (datosParseados)."
        const datosParseados: TareasAlmacenadas = JSON.parse(tareasGuardadas);
      
        // 4.uso Array.isArray() para comprobar si lo que le paso es un array
        // y luego asignas los valores a this.pendientes, this.produccion, etc.
        // Si es un array válido (?), asigna ese array a this.pendientes.
        // Si NO es un array válido (:), asigna un array vacío ([]) a this.pendientes en su lugar.
        this.pendientes = Array.isArray(datosParseados.pendientes) ? datosParseados.pendientes : [];
        this.produccion = Array.isArray(datosParseados.produccion) ? datosParseados.produccion : [];
        this.completadas = Array.isArray(datosParseados.completadas) ? datosParseados.completadas : [];

      } catch (e) {
        console.error("Error al cargar datos. Limpiando localStorage de datos corruptos.");
        localStorage.removeItem(this.STORAGE_KEY); // Limpia los datos malos
      }
    }
  }



    agregarTarea() {
      if (this.nuevaTarea.trim() !== '') {
        this.pendientes.push(this.nuevaTarea.trim());
        this.nuevaTarea = '';
        this.guardarTareas();
      }
    }

    borrarTarea(index: number, nombreTabla: NombreDeTabla) {
      if (confirm('¿Seguro que quieres borrar todas las tareas?')) {
        // 1. Accedemos a la propiedad de forma segura usando this[nombreTabla]
        const listaActual = this[nombreTabla];
        listaActual.splice(index, 1);
        this.guardarTareas();
      }
    }

    borrarTodo() {
      this.pendientes = [];
      this.produccion = [];
      this.completadas = [];  
      this.guardarTareas();
    }

    guardarTareas() {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
        pendientes: this.pendientes,
        produccion: this.produccion,
        completadas: this.completadas
      }));
    }

    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
      this.guardarTareas(); 
    }
}
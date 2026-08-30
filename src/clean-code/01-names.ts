(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, deleteFlag: false },
        { id: 2, deleteFlag: false },
        { id: 3, deleteFlag: true },
        { id: 4, deleteFlag: false },
        { id: 5, deleteFlag: false },
        { id: 7, deleteFlag: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.deleteFlag );

    // Malos nombres
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const todaysDate = new Date();
    
    // días transcurridos - elapsed time in days
    const daysElapsed: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;


})();




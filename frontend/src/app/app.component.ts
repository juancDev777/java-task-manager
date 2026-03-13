import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './services/user.service';
import { User, CreateUserCommand } from './models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly userService = inject(UserService);

  users: User[] = [];
  userForm: FormGroup;
  editingId: string | null = null;
  loading = false;
  notification: { message: string; type: 'success' | 'error' } | null = null;

  constructor() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getAll().subscribe({
      next: (data) => this.users = data,
      error: () => this.showNotification('Failed to load users', 'error')
    });
  }

  showNotification(message: string, type: 'success' | 'error'): void {
    this.notification = { message, type };
    setTimeout(() => this.notification = null, 3000);
  }

  handleSubmit(): void {
    if (this.userForm.invalid) return;

    this.loading = true;
    const formData = this.userForm.value;

    if (this.editingId) {
      this.userService.update(this.editingId, { ...formData, id: this.editingId }).subscribe({
        next: () => {
          this.showNotification('User updated successfully!', 'success');
          this.resetForm();
          this.fetchUsers();
        },
        error: (err) => {
          this.showNotification(err.error?.error || 'Failed to update user', 'error');
          this.loading = false;
        }
      });
    } else {
      this.userService.create(formData).subscribe({
        next: () => {
          this.showNotification('User registered successfully!', 'success');
          this.resetForm();
          this.fetchUsers();
        },
        error: (err) => {
          this.showNotification(err.error?.error || 'Failed to create user', 'error');
          this.loading = false;
        }
      });
    }
  }

  handleEdit(user: User): void {
    this.editingId = user.id;
    this.userForm.patchValue({
      name: user.name,
      email: user.email
    });
  }

  cancelEdit(): void {
    this.resetForm();
  }

  private resetForm(): void {
    this.editingId = null;
    this.userForm.reset();
    this.loading = false;
  }
  deleteUser(id: string): void {
       if (confirm('Tem certeza que deseja excluir este usuário?')) {
           this.userService.delete(id).subscribe({
               next: () => {
                 this.showNotification('Usuário excluído!', 'success');
                 this.fetchUsers();
               },
               error: () => this.showNotification('Erro ao excluir usuário', 'error')
           });
         }
     }
}

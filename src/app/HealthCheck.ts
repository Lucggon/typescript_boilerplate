export class HealthCheck {
  private status: boolean = false;
  constructor() {
    this.status = true;
  }

  getStatus(): boolean {
    return this.status;
  }
}

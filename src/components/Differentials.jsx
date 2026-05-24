.differentials {
  background: var(--bg-primary);
}

.differentials__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
  margin-top: var(--space-3xl);
}

.differentials__card {
  text-align: center;
  padding: var(--space-xl);
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
}

.differentials__icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: var(--space-sm);
}

.differentials__card h3 {
  margin-bottom: var(--space-xs);
}

.differentials__card p {
  color: var(--text-tertiary);
  font-size: var(--text-sm);
}

@media (max-width: 768px) {
  .differentials__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .differentials__grid {
    grid-template-columns: 1fr;
  }
}
import { useState } from 'react'
import './PlanForm.css'

const objetivos = [
  { value: 'emagrecer', label: 'Emagrecimento' },
  { value: 'ganhar_massa', label: 'Ganho de massa muscular' },
  { value: 'condicionamento', label: 'Condicionamento físico' },
  { value: 'qualidade_vida', label: 'Qualidade de vida' },
]

const tiposDieta = [
  { value: 'onivora', label: 'Onívora' },
  { value: 'vegetariana', label: 'Vegetariana' },
  { value: 'vegana', label: 'Vegana' },
  { value: 'lowcarb', label: 'Low Carb' },
  { value: 'mediterranea', label: 'Mediterrânea' },
]

const restricoesOptions = ['Glúten', 'Lactose', 'Ovo', 'Amendoim', 'Frutos do mar', 'Soja']

function PlanForm({ currentStep, formData, steps, updateField, onNext, onPrev, isGenerating }) {
  const step = steps[currentStep]

  const renderField = (field) => {
    switch (field) {
      case 'nome':
        return (
          <div className="form-group" key={field}>
            <label htmlFor="nome">Seu nome</label>
            <input
              id="nome"
              type="text"
              placeholder="Ex: Maria Silva"
              value={formData.nome}
              onChange={(e) => updateField('nome', e.target.value)}
            />
          </div>
        )
      case 'idade':
        return (
          <div className="form-group" key={field}>
            <label htmlFor="idade">Idade</label>
            <input
              id="idade"
              type="number"
              min="10"
              max="120"
              placeholder="Ex: 32"
              value={formData.idade}
              onChange={(e) => updateField('idade', e.target.value)}
            />
          </div>
        )
      case 'sexo':
        return (
          <div className="form-group" key={field}>
            <label>Sexo biológico</label>
            <div className="radio-group">
              <label className={`radio-card ${formData.sexo === 'masculino' ? 'selected' : ''}`}>
                <input type="radio" name="sexo" value="masculino" checked={formData.sexo === 'masculino'} onChange={() => updateField('sexo', 'masculino')} />
                Masculino
              </label>
              <label className={`radio-card ${formData.sexo === 'feminino' ? 'selected' : ''}`}>
                <input type="radio" name="sexo" value="feminino" checked={formData.sexo === 'feminino'} onChange={() => updateField('sexo', 'feminino')} />
                Feminino
              </label>
            </div>
          </div>
        )
      case 'altura':
        return (
          <div className="form-group" key={field}>
            <label htmlFor="altura">Altura (cm)</label>
            <input id="altura" type="number" placeholder="Ex: 165" value={formData.altura} onChange={(e) => updateField('altura', e.target.value)} />
          </div>
        )
      case 'peso':
        return (
          <div className="form-group" key={field}>
            <label htmlFor="peso">Peso atual (kg)</label>
            <input id="peso" type="number" placeholder="Ex: 70" value={formData.peso} onChange={(e) => updateField('peso', e.target.value)} />
          </div>
        )
      case 'objetivo':
        return (
          <div className="form-group" key={field}>
            <label>Objetivo principal</label>
            <div className="radio-group vertical">
              {objetivos.map(obj => (
                <label key={obj.value} className={`radio-card ${formData.objetivo === obj.value ? 'selected' : ''}`}>
                  <input type="radio" name="objetivo" value={obj.value} checked={formData.objetivo === obj.value} onChange={() => updateField('objetivo', obj.value)} />
                  {obj.label}
                </label>
              ))}
            </div>
          </div>
        )
      // Rotina
      case 'nivelAtividade':
        return (
          <div className="form-group" key={field}>
            <label>Nível de atividade física</label>
            <select value={formData.nivelAtividade} onChange={(e) => updateField('nivelAtividade', e.target.value)}>
              <option value="">Selecione...</option>
              <option value="sedentario">Sedentário</option>
              <option value="leve">Leve (1-2x/semana)</option>
              <option value="moderado">Moderado (3-4x/semana)</option>
              <option value="intenso">Intenso (5-6x/semana)</option>
              <option value="atleta">Atleta</option>
            </select>
          </div>
        )
      case 'horasSono':
        return (
          <div className="form-group" key={field}>
            <label htmlFor="sono">Horas de sono por noite</label>
            <input id="sono" type="number" min="0" max="16" placeholder="Ex: 7" value={formData.horasSono} onChange={(e) => updateField('horasSono', e.target.value)} />
          </div>
        )
      case 'estresse':
        return (
          <div className="form-group" key={field}>
            <label>Nível de estresse</label>
            <select value={formData.estresse} onChange={(e) => updateField('estresse', e.target.value)}>
              <option value="">Selecione...</option>
              <option value="baixo">Baixo</option>
              <option value="medio">Médio</option>
              <option value="alto">Alto</option>
            </select>
          </div>
        )
      case 'habitosAlimentares':
        return (
          <div className="form-group" key={field}>
            <label htmlFor="habitos">Descreva seus hábitos alimentares atuais</label>
            <textarea id="habitos" rows="3" placeholder="Ex: Como pouca verdura, pulo o café da manhã..." value={formData.habitosAlimentares} onChange={(e) => updateField('habitosAlimentares', e.target.value)} />
          </div>
        )
      // Preferências
      case 'tipoDieta':
        return (
          <div className="form-group" key={field}>
            <label>Tipo de dieta preferida</label>
            <div className="radio-group">
              {tiposDieta.map(t => (
                <label key={t.value} className={`radio-card ${formData.tipoDieta === t.value ? 'selected' : ''}`}>
                  <input type="radio" name="tipoDieta" value={t.value} checked={formData.tipoDieta === t.value} onChange={() => updateField('tipoDieta', t.value)} />
                  {t.label}
                </label>
              ))}
            </div>
          </div>
        )
      case 'restricoes':
        return (
          <div className="form-group" key={field}>
            <label>Restrições alimentares</label>
            <div className="checkbox-group">
              {restricoesOptions.map(r => (
                <label key={r} className="checkbox-card">
                  <input
                    type="checkbox"
                    checked={formData.restricoes.includes(r)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateField('restricoes', [...formData.restricoes, r])
                      } else {
                        updateField('restricoes', formData.restricoes.filter(item => item !== r))
                      }
                    }}
                  />
                  {r}
                </label>
              ))}
            </div>
          </div>
        )
      case 'alimentosNaoGosta':
        return (
          <div className="form-group" key={field}>
            <label htmlFor="naogosta">Alimentos que você não gosta (separados por vírgula)</label>
            <input id="naogosta" type="text" placeholder="Ex: beterraba, fígado" value={formData.alimentosNaoGosta} onChange={(e) => updateField('alimentosNaoGosta', e.target.value)} />
          </div>
        )
      case 'refeicoesPorDia':
        return (
          <div className="form-group" key={field}>
            <label htmlFor="refeicoes">Quantas refeições por dia?</label>
            <select id="refeicoes" value={formData.refeicoesPorDia} onChange={(e) => updateField('refeicoesPorDia', e.target.value)}>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        )
      case 'metaPeso':
        return (
          <div className="form-group" key={field}>
            <label htmlFor="meta">Meta de peso (kg) — opcional</label>
            <input id="meta" type="number" placeholder="Ex: 65" value={formData.metaPeso} onChange={(e) => updateField('metaPeso', e.target.value)} />
          </div>
        )
      case 'prazo':
        return (
          <div className="form-group" key={field}>
            <label htmlFor="prazo">Prazo desejado (semanas)</label>
            <input id="prazo" type="number" placeholder="Ex: 12" value={formData.prazo} onChange={(e) => updateField('prazo', e.target.value)} />
          </div>
        )
      case 'disponibilidadeTreino':
        return (
          <div className="form-group" key={field}>
            <label>Dias disponíveis para treino por semana</label>
            <select value={formData.disponibilidadeTreino} onChange={(e) => updateField('disponibilidadeTreino', e.target.value)}>
              <option value="">Selecione...</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        )
      case 'equipamentos':
        return (
          <div className="form-group" key={field}>
            <label>Equipamentos disponíveis</label>
            <div className="checkbox-group">
              {['Halteres', 'Barra', 'Bicicleta', 'Esteira', 'Elásticos', 'Nenhum'].map(eq => (
                <label key={eq} className="checkbox-card">
                  <input
                    type="checkbox"
                    checked={formData.equipamentos.includes(eq)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateField('equipamentos', [...formData.equipamentos, eq])
                      } else {
                        updateField('equipamentos', formData.equipamentos.filter(i => i !== eq))
                      }
                    }}
                  />
                  {eq}
                </label>
              ))}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="plan-form-section">
      <div className="container">
        <div className="plan-form-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
          </div>
          <span className="progress-text">Etapa {currentStep + 1} de {steps.length}</span>
        </div>

        <h2 className="plan-form-title">{step.title}</h2>

        <div className="plan-form-fields">
          {step.fields.map(field => renderField(field))}
        </div>

        <div className="plan-form-actions">
          {currentStep > 0 && (
            <button className="btn btn-secondary" onClick={onPrev}>
              Voltar
            </button>
          )}
          <button
            className="btn btn-primary"
            onClick={onNext}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>Gerando plano... <span className="spinner" /></>
            ) : currentStep === steps.length - 1 ? (
              'Gerar meu plano'
            ) : (
              'Próximo'
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

export default PlanForm
# Guia de Tradução / Translation Guide

## Como funciona / How it works

O site agora possui um botão de alternância de idioma no menu superior. Quando clicado, ele alterna entre inglês (EN) e português (PT).

## Estrutura do código

### 1. Componente TypeScript (app.component.ts)

```typescript
currentLang: string = 'en'; // Idioma padrão

toggleLanguage() {
  this.currentLang = this.currentLang === 'en' ? 'pt' : 'en';
  localStorage.setItem('preferredLang', this.currentLang);
}
```

### 2. Template HTML (app.component.html)

Para adicionar conteúdo bilíngue, use a diretiva `*ngIf`:

```html
<!-- Título -->
<h4 *ngIf="currentLang === 'en'">About</h4>
<h4 *ngIf="currentLang === 'pt'">Sobre</h4>

<!-- Parágrafo -->
<p *ngIf="currentLang === 'en'">Hello! My name is Herculano...</p>
<p *ngIf="currentLang === 'pt'">Olá! Meu nome é Herculano...</p>
```

## Seções já traduzidas

- ✅ Botão de alternância no navbar
- ✅ Seção "About" / "Sobre"
- ✅ "General Information" / "Informações Gerais"
- ✅ Títulos principais: Competencies, Academic Formation, Professional Experience, Skills

## Como adicionar mais traduções

### Exemplo 1: Traduzir um título

**Antes:**
```html
<div class="h5">Tech Lead - Data Engineer</div>
```

**Depois:**
```html
<div class="h5" *ngIf="currentLang === 'en'">Tech Lead - Data Engineer</div>
<div class="h5" *ngIf="currentLang === 'pt'">Líder Técnico - Engenheiro de Dados</div>
```

### Exemplo 2: Traduzir um parágrafo

**Antes:**
```html
<p>As my primary cloud platform, I have over six years of hands-on experience...</p>
```

**Depois:**
```html
<p *ngIf="currentLang === 'en'">As my primary cloud platform, I have over six years of hands-on experience...</p>
<p *ngIf="currentLang === 'pt'">Como minha plataforma principal de nuvem, tenho mais de seis anos de experiência prática...</p>
```

### Exemplo 3: Traduzir itens de lista

**Antes:**
```html
<li>Business process mapping.</li>
```

**Depois:**
```html
<li *ngIf="currentLang === 'en'">Business process mapping.</li>
<li *ngIf="currentLang === 'pt'">Mapeamento de processos de negócios.</li>
```

## Dicas importantes

1. **Sempre duplique o elemento**: Crie dois elementos idênticos, um para cada idioma
2. **Use *ngIf**: Adicione `*ngIf="currentLang === 'en'"` para conteúdo em inglês e `*ngIf="currentLang === 'pt'"` para português
3. **Mantenha a estrutura HTML**: A única diferença deve ser o texto/conteúdo
4. **Teste ambos os idiomas**: Clique no botão para verificar se a alternância funciona corretamente

## Palavras-chave úteis para tradução

| English | Português |
|---------|-----------|
| About | Sobre |
| Skills | Habilidades |
| Experience | Experiência |
| Education | Educação/Formação |
| Professional | Profissional |
| Academic | Acadêmico |
| Tools | Ferramentas |
| Platform | Plataforma |
| Cloud | Nuvem |
| Language | Linguagem/Idioma |
| Development | Desenvolvimento |
| Team | Equipe |
| Leadership | Liderança |
| Project | Projeto |
| Data | Dados |
| Engineer | Engenheiro |
| Architect | Arquiteto |
| Analyst | Analista |

## Próximos passos sugeridos

Para completar a tradução do site, você pode traduzir:

1. Descrições das competências (seção Competencies Summary)
2. Descrições das experiências profissionais
3. Descrições da formação acadêmica
4. Descrições das habilidades técnicas (Skills section)
5. Textos dos botões de download de CV

## Exemplo completo de uma seção traduzida

```html
<div class="card">
  <div class="row">
    <div class="col-md-3 bg-primary">
      <div class="card-body cc-experience-header">
        <p>2022-Atual</p>
        <div class="h5">Polígono Capital</div>
      </div>
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <div class="h5" *ngIf="currentLang === 'en'">Tech Lead - Data Engineer</div>
        <div class="h5" *ngIf="currentLang === 'pt'">Líder Técnico - Engenheiro de Dados</div>
        
        <p *ngIf="currentLang === 'en'">
          Multidisciplinary role...
        </p>
        
        <p *ngIf="currentLang === 'pt'">
          Papel multidisciplinar...
        </p>
      </div>
    </div>
  </div>
</div>
```

## Persistência do idioma

O idioma selecionado é salvo no `localStorage` do navegador, então quando o usuário retornar ao site, o idioma anterior será mantido.

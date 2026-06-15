// ════════════════════════════════════════════════════════════════════
// DADOS REAIS — EXTRAÍDOS DAS PLANILHAS OFICIAIS
// ════════════════════════════════════════════════════════════════════

console.log("SCRIPT INICIOU");
const DB = {
  maio: {
    meta:{ mes:"Maio 2026", gerado:"22/05/2026",
      skus:162, div:117, ajust:43, ok:2, imp:5522.89,
      faltas:28, sobras:125, acuracia:27.8, pendentes:117 },
    lojas:[
      {n:"Carrossel",skus:67,div:49,ajust:18,ok:0,faltas:14,sobras:53,imp:2737.81,cor:"#E74C3C"},
      {n:"Matriz",   skus:26,div:20,ajust:5, ok:1,faltas:9, sobras:17,imp:1245.25,cor:"#1A3260"},
      {n:"Cruzília", skus:30,div:18,ajust:11,ok:1,faltas:2, sobras:21,imp:691.61, cor:"#00B8AF"},
      {n:"CRV",      skus:14,div:9, ajust:5, ok:0,faltas:0, sobras:14,imp:379.00, cor:"#F59E0B"},
      {n:"Baependi", skus:16,div:14,ajust:2, ok:0,faltas:2, sobras:12,imp:320.43, cor:"#7C3AED"},
      {n:"Cristina", skus:9, div:7, ajust:2, ok:0,faltas:1, sobras:8, imp:148.79, cor:"#64748B"}
    ],
    sems:{ labels:["SEM 01","SEM 02","SEM 03","SEM 04"],
           divs:[70,25,15,7], imps:[2093.85,1853.04,754.55,821.45], ajust:[0,22,13,8] },
    tipos:[
      {n:"Aj. venda não baixada",v:62, imp:1388.64,c:"#00B8AF"},
      {n:"Ajuste de estoque",    v:51, imp:1860.88,c:"#1A3260"},
      {n:"Divergência física",   v:24, imp:997.89, c:"#DC3545"},
      {n:"Erro de entrada NF",   v:14, imp:1086.34,c:"#F59E0B"},
      {n:"Avaria",               v:6,  imp:0,      c:"#7C3AED"},
      {n:"Divergência sistêmica",v:5,  imp:189.14, c:"#64748B"}
    ],
    top15:[
      {sku:"ALGINAC 1000 C/30 COMP",             loja:"Matriz",    fis:8,  sis:2,  dif:"+6",   unit:56.61, imp:339.66, tipo:"Aj. venda não baixada",status:"Divergente",sem:"SEM 02"},
      {sku:"ABS Geriatrico Dry Economics 20UND",  loja:"Carrossel", fis:21, sis:0,  dif:"+21",  unit:11.99, imp:251.79, tipo:"Erro de entrada NF",   status:"Divergente",sem:"SEM 02"},
      {sku:"Pulmosonic Sta Nebulizador Amarelo",  loja:"Carrossel", fis:1,  sis:0,  dif:"+1",   unit:184.21,imp:184.21, tipo:"Divergência física",   status:"Divergente",sem:"SEM 02"},
      {sku:"Caramelo de Creatina Intelligence",   loja:"Carrossel", fis:0,  sis:2,  dif:"-2",   unit:91.10, imp:182.20, tipo:"Divergência física",   status:"Divergente",sem:"SEM 01"},
      {sku:"Paleta de Rosto Minne Mouse Rose",    loja:"Carrossel", fis:3,  sis:1,  dif:"+2",   unit:80.79, imp:161.58, tipo:"Erro de entrada NF",   status:"Divergente",sem:"SEM 04"},
      {sku:"Permaganato de Potassio 100MG",       loja:"CRV",       fis:105,sis:0,  dif:"+105", unit:1.34,  imp:140.70, tipo:"Divergência sistêmica",status:"Divergente",sem:"SEM 01"},
      {sku:"Kit Cicatricure Protetor Solar",      loja:"Matriz",    fis:1,  sis:6,  dif:"-5",   unit:27.49, imp:137.45, tipo:"Erro de entrada NF",   status:"Ajustado",  sem:"SEM 02"},
      {sku:"ENTRESTO 200MG 60CPR",               loja:"Carrossel", fis:3,  sis:0,  dif:"+3",   unit:42.28, imp:126.84, tipo:"Ajuste de estoque",    status:"Ajustado",  sem:"SEM 03"},
      {sku:"Pressat 2,5mg 30cpr",                loja:"Carrossel", fis:10, sis:14, dif:"-4",   unit:31.54, imp:126.16, tipo:"Ajuste de estoque",    status:"Ajustado",  sem:"SEM 04"},
      {sku:"Ninho Fases 1+ 800G",                loja:"Matriz",    fis:80, sis:83, dif:"-3",   unit:39.42, imp:118.26, tipo:"Divergência física",   status:"Ok",        sem:"SEM 01"},
      {sku:"Maxalt 10mg 2cpr",                   loja:"Carrossel", fis:9,  sis:13, dif:"-4",   unit:29.26, imp:117.04, tipo:"Ajuste de estoque",    status:"Ajustado",  sem:"SEM 04"},
      {sku:"Valda Friends Past Morango 25G",      loja:"Baependi",  fis:33, sis:3,  dif:"+30",  unit:3.70,  imp:111.00, tipo:"Ajuste de estoque",    status:"Divergente",sem:"SEM 02"},
      {sku:"Colonia Desodorante Amburama 100ML",  loja:"Carrossel", fis:1,  sis:0,  dif:"+1",   unit:95.95, imp:95.95,  tipo:"Ajuste de estoque",    status:"Divergente",sem:"SEM 01"},
      {sku:"AMIORON 200MG 20CPR",               loja:"Carrossel", fis:7,  sis:1,  dif:"+6",   unit:15.60, imp:93.60,  tipo:"Erro de entrada NF",   status:"Ajustado",  sem:"SEM 04"},
      {sku:"Atroveran HOT Sache",                loja:"Cruzília",  fis:9,  sis:0,  dif:"+9",   unit:10.13, imp:91.17,  tipo:"Ajuste de estoque",    status:"Divergente",sem:"SEM 02"}
    ],
    causas_anl:{
      nivel:"melhora", acuracia:"27,8%", meta:"60%",
      items:[
        {cls:"ca-positivo",pri:"MELHORA",pb:"pb-P",titulo:"Acurácia sobe de 3,8% → 27,8% (+24pp vs Abril)",
         loja:"Toda a Rede",lcor:"#10B981",
         desc:"Maio 2026 confirma virada real: acurácia +24 pontos, impacto caiu R$ 3.755 (-40,5%), divergências reduziram 117 (vs 253 em Abril). A planilha real confirma 43 ajustes em 162 SKUs. Tendência semanal consistente: SEM01 com 70 divergências → SEM04 com apenas 7.",
         imps:[{i:"📈",l:"Melhora",v:"+24pp vs Abril"},{i:"💰",l:"Redução",v:"↓ R$ 3.755"},{i:"✅",l:"Ajustados",v:"43 de 162"}],
         acao:"Manter práticas. Replicar processo de Cruzília (37%) nas demais lojas. Foco em Baependi (12,5%) e Matriz (23,1%) que têm menor índice."},
        {cls:"ca-critico",pri:"URGENTE",pb:"pb-U",titulo:"Venda Não Baixada Persiste — 62 Ocorrências Reais (40,5%)",
         loja:"Carrossel · Matriz",lcor:"#DC3545",
         desc:"Com 62 ocorrências confirmadas na planilha (R$ 1.388,64), 'ajuste de venda não baixada' domina Maio. ALGINAC 1000 (Matriz, +6un, R$ 339,66) lidera. A melhora veio de ajustes manuais — a integração PDV-ERP não foi corrigida. Sem resolução da causa raiz, o ciclo se repete em Junho.",
         imps:[{i:"🔄",l:"Reincidência",v:"2º mês consecutivo"},{i:"⚠️",l:"Ocorrências",v:"62 (R$ 1.388,64)"},{i:"🔗",l:"PDV-ERP",v:"Não resolvido"}],
         acao:"Escalar para TI com prazo de 15 dias. Configurar alerta diário de vendas sem baixa de estoque para conferência manual."},
        {cls:"ca-critico",pri:"URGENTE",pb:"pb-U",titulo:"Carrossel — R$ 2.737,81 (49,6% do Impacto Total Real)",
         loja:"Carrossel",lcor:"#DC3545",
         desc:"Carrossel: 67 SKUs auditados, 49 divergentes (73,1%), apenas 18 ajustados (26,9%). ABS Geriátrico Dry reincide pelo 2º mês (+21un, R$ 251,79). Paleta Minne Mouse Rose novo caso de erro NF (+2un, R$ 161,58). Melhora de R$ 5.544→R$ 2.737 (-50,6%) é positiva mas ainda insuficiente.",
         imps:[{i:"🏪",l:"Participação",v:"49,6% do total"},{i:"🔄",l:"ABS Geriátrico",v:"Reincide — 2 meses"},{i:"💰",l:"Impacto real",v:"R$ 2.737,81"}],
         acao:"Supervisor de inventário dedicado na Carrossel. Auditoria presencial semanal. Mini-auditorias diárias nos top 15 SKUs. Investigar ABS Geriátrico desde Março."},
        {cls:"ca-critico",pri:"URGENTE",pb:"pb-U",titulo:"Permanganato Potássio CRV — +105 Unidades Sistêmicas",
         loja:"CRV",lcor:"#DC3545",
         desc:"Permanganato de Potássio 100MG CRV: +105 unidades no sistema vs físico (R$ 140,70). Magnitude indica falha estrutural de cadastro: provável erro de unidade de medida (caixas vs comprimidos) ou fator de conversão incorreto. CRV tem 0% de faltas e 100% de sobras — padrão sistemático de entradas sem conferência física.",
         imps:[{i:"📦",l:"Excedente",v:"+105 unidades"},{i:"🔍",l:"Causa suspeita",v:"Unidade de medida"},{i:"🏪",l:"CRV",v:"0 faltas / 14 sobras"}],
         acao:"Investigar cadastro do produto imediatamente. Contagem física tripla com supervisor. Auditar todos produtos MG/ML nas 6 lojas se confirmar erro de parametrização."},
        {cls:"ca-alto",pri:"ALTO",pb:"pb-A",titulo:"51 Ajustes de Estoque — R$ 1.860,88 (Maior Impacto por Tipo)",
         loja:"Toda a Rede",lcor:"#F59E0B",
         desc:"51 ocorrências de ajuste de estoque sem investigação da causa raiz totalizam R$ 1.860,88 — maior impacto financeiro por tipo em Maio. ENTRESTO 200MG (+3un, R$ 126,84) e Pressat 2,5mg (-4un, R$ 126,16) entre os casos mais críticos. Indica cultura de 'ajuste rápido' ao invés de análise.",
         imps:[{i:"✏️",l:"Ajustes manuais",v:"51 ocorrências"},{i:"💰",l:"Maior impacto/tipo",v:"R$ 1.860,88"},{i:"📋",l:"Rastreabilidade",v:"Comprometida"}],
         acao:"Aprovação formal do supervisor para qualquer ajuste manual (Semana 1 de Junho). Log de justificativa obrigatório. Auditoria retroativa dos 51 casos para identificar padrões."},
        {cls:"ca-alto",pri:"ALTO",pb:"pb-A",titulo:"14 Erros de NF em Maio — Aumentou vs Abril (9 → 14)",
         loja:"Carrossel · Matriz · CRV",lcor:"#F59E0B",
         desc:"Erros de NF aumentaram de 9 (Abril) para 14 (Maio), impacto R$ 1.086,34. ABS Geriátrico reincide novamente. Paleta Minne Mouse Rose (R$ 161,58) e Kit Cicatricure Matriz (-5un, R$ 137,45) são novos casos. Aumento de erros NF enquanto outros tipos caem = deterioração no processo de recebimento.",
         imps:[{i:"🧾",l:"Erros NF",v:"14 (+5 vs Abril)"},{i:"💰",l:"Impacto",v:"R$ 1.086,34"},{i:"📈",l:"Tendência",v:"Piorando"}],
         acao:"Conferência dupla obrigatória na entrada de NF em Carrossel e Matriz (Semana 1 de Junho). Checklist de recebimento com foto. Treinamento dos responsáveis pelo recebimento."},
                {cls:"ca-medio",pri:"MÉDIO",pb:"pb-M",
         titulo:"Meta 60% de Maio Não Atingida — Real: 27,8%",
         loja:"Toda a Rede",
         lcor:"#7C3AED",
         desc:"Meta definida pós-Abril era 60%. Resultado real foi 27,8%.",
         imps:[],
         acao:""
        }
      ]
    }
  }
};
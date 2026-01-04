import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const servicos = [
  "Atendimento Pedagógico",
  "Suporte Financeiro",
  "Apoio Técnico",
  "Secretaria Acadêmica",
];

export default function Agendamento() {
  const [selectedServico, setSelectedServico] = useState("");
  const [data, setData] = useState<Date | undefined>();
  const [horario, setHorario] = useState("");

  const handleAgendar = () => {
    if (selectedServico && data && horario) {
      alert(
        `✅ Agendamento confirmado para ${selectedServico} em ${format(
          data,
          "dd/MM/yyyy"
        )} às ${horario}`
      );
    } else {
      alert("❌ Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <Card className="w-full max-w-xl">
        <CardContent className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center">
            Agendamento de Serviços - Anhanguera
          </h1>

          <div className="space-y-2">
            <label className="font-medium">Serviço:</label>
            <Select onValueChange={setSelectedServico}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um serviço" />
              </SelectTrigger>
              <SelectContent>
                {servicos.map((servico) => (
                  <SelectItem key={servico} value={servico}>
                    {servico}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="font-medium">Data:</label>
            <Calendar
              mode="single"
              selected={data}
              onSelect={setData}
              className="rounded-md border"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Horário:</label>
            <Input
              type="time"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
            />
          </div>

          <Button className="w-full" onClick={handleAgendar}>
            Agendar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

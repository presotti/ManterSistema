package mantersistema.sistema.ModeloDTO;

import java.time.LocalDateTime;

import mantersistema.sistema.Modelo.Sistema;
import mantersistema.sistema.Modelo.Status;

public class SistemaDetalheDTO {
    
    private int id;

    private String descricao;

    private String sigla;

    private String email;

    private String url;

    private Status status;

    private LocalDateTime dataAtualizacao;

    private String justificativa;

    public SistemaDetalheDTO(Sistema sistema) {
        this.id = sistema.getId();
        this.descricao = sistema.getDescricao();
        this.sigla = sistema.getSigla();
        this.email = sistema.getEmail();
        this.url = sistema.getUrl();
        this.status = sistema.getStatus();
        this.dataAtualizacao = sistema.getData();
        this.justificativa = sistema.getJustificativa();
    }

    public int getId() {
        return this.id;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public String getSigla() {
        return this.sigla;
    }

    public String getEmail() {
        return this.email;
    }

    public String getUrl() {
        return this.url;
    }

    public Status getStatus() {
        return this.status;
    }

    public LocalDateTime getDataAtualizacao() {
        return this.dataAtualizacao;
    }

    public String getJustificativa() {
        return this.justificativa;
    }

}
package mantersistema.sistema.ModeloDTO;

import mantersistema.sistema.Modelo.Sistema;

public class SistemaCadastroDTO {
    
    private String descricao;

    private String sigla;

    private String email;

    private String url;

    public Sistema cadastro(){
        return new Sistema(descricao, sigla, email, url);
    }

    public String getDescricao() {
        return this.descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getSigla() {
        return this.sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
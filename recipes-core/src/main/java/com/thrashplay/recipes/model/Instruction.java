package com.thrashplay.recipes.model;

import org.hibernate.validator.constraints.NotBlank;

/**
 * Model class representing a step in the recipe instructions.
 *
 * @author Sean Kleinjung
 */
public class Instruction {
    // the ingredient ID
    private long id;

    // the text of the instruction
    @NotBlank
    private String text;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return "Instruction{" +
                "id=" + id +
                ", text='" + text + '\'' +
                '}';
    }
}

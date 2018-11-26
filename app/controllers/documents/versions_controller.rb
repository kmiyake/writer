# frozen_string_literal: true

class Documents::VersionsController < ApplicationController
  def show
    @document = Document.find(params[:document_id])
    @version = @document.versions.find(params[:id])
  end
end

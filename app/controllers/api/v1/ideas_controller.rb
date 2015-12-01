class Api::V1::IdeasController < ApplicationController
  respond_to :html, :json

  def index
  end

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end

end



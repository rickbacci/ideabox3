class Api::V1::IdeasController < ApplicationController
  respond_to :html, :json

  def index
    respond_with Idea.order(:created_at), location: nil
  end

  def create
    idea = Idea.new(idea_params);
    if idea.save
      respond_with idea, location: api_v1_ideas_path
    else
      errors = idea.errors.full_messages;
      respond_with  errors, location: root_path
    end

  end

  def destroy
    respond_with Idea.find(params[:id]).delete
    head :no_content
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end
end



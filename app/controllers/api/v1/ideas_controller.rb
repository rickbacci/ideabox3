class Api::V1::IdeasController < ApplicationController

  respond_to :html, :json

  def index
    respond_with Idea.order(:created_at)
  end

  def create
    respond_with Idea.create(idea_params), location: api_v1_ideas_path;
  end

  def update
    key   = idea_params.keys[0].to_sym
    value = idea_params[key]

    respond_with Idea.find(params[:id]).update(key => value)
  end

  def show
    respond_with Idea.find(params[:id])
  end

  def destroy
    respond_with Idea.find(params[:id]).delete
  end

  private

  def idea_params
    params.require(:idea).permit(:id, :title, :body, :quality)
  end
end


class Api::V1::IdeasController < ApplicationController

  respond_to :html, :json

  def index
    respond_with Idea.order(:created_at)
  end

  def create
    respond_with Idea.create(idea_params), location: api_v1_ideas_path;
  end

  def update
    respond_with Idea.find(params[:id])
      .update(quality: params[:idea][:quality]), location: nil
  end

  def destroy
    respond_with Idea.find(params[:id]).delete
  end

  private

  def idea_params
    params.require(:idea).permit(:id, :title, :body, :quality)
  end
end

